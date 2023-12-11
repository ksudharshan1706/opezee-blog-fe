import "./write.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import app from "../../firebase.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context.js";

export default function Write() {
  const [img, setImg] = useState(null);
  const [imgper, setImgPerc] = useState(0);
  const { user } = useContext(Context);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleUpload = (e) => {
    e.preventDefault();
    //console.log({ username: user.username, ...inputs });
    axios
      .post("/posts", { username: user.username, ...inputs })
      .then(() => console.log("added new post"))
      .then(() => navigate("/"));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
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
    img && uploadFile(img, "photo");
  }, [img]);
  console.log(img);
  return (
    <div className="write">
      {img && (
        <img className="writeImg" src={URL.createObjectURL(img)} alt="" />
      )}

      <form className="writeForm" onSubmit={handleUpload}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            name="photo"
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setImg(e.target.files[0])}
          />
          <input
            name="title"
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name="desc"
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
