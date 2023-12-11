import { Link } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  // console.log(cats);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.ibb.co/h182N1t/1702140026901.jpg"
          alt=""
          style={{ objectFit: "cover", borderRadius: "20px" }}
        />
        <p style={{ fontFamily: "Lora" }}>
          Hey there, lovely souls! I'm <b>Sudharshan</b>, the heart and soul
          behind this little corner of the internet where words dance and ideas
          come to life. I'm a Software Engineer, navigating the beautiful chaos
          of life with a cup of coffee in one hand and a heart full of dreams in
          the other.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i class="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
