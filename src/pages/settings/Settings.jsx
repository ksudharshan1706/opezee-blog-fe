import "./settings.css";
import Sidebar from "../../componants/sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import app from "../../firebase.js";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [success, setSuccess] = useState(false);
  const [img, setImg] = useState(null);
  const [imgper, setImgPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);

  const handleUpload = async (e) => {
    e.preventDefault();
    // console.log({ username: user.username, ...inputs });
    const updatedUser = {
      userId: user._id,
      username: user.username,
      ...inputs,
    };
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  // console.log(user);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    img && uploadFile(img, "profilePic");
  }, [img]);
  // console.log(img);

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleUpload}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                user.profilePic
                  ? user.profilePic
                  : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
              }
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              name="profilePic"
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder={user.username}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder={user.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
