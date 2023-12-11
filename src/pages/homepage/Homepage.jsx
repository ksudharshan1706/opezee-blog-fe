import { useLocation } from "react-router";
import "./homepage.css";
import Header from "../../componants/header/Header";
import Sidebar from "../../componants/sidebar/Sidebar";
import Posts from "../../componants/posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

export default function Homepage() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [searchpost, setSearchpost] = useState("");
  const [originalposts, setOriginalposts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      setOriginalposts(res.data);
    };
    fetchPosts();
  }, [search]);
  // console.log(posts);

  useEffect(() => {
    if (searchpost) {
      const arr = originalposts.filter((data) => {
        // console.log(searchpost);
        if (data.title.toLowerCase().includes(searchpost)) return data;
      });
      // console.log(arr);
      setPosts(arr);
    } else {
      setPosts(originalposts);
    }
  }, [searchpost]);

  return (
    <>
      <Header />
      <div className="topbarCenter" style={{ marginLeft: "40%" }}>
        <div className="searchbar">
          <div>
            <i
              className="topSearchIcon fas fa-search"
              style={{ marginLeft: "10px", marginTop: "5px" }}
            ></i>
          </div>
          <input
            style={{ marginLeft: "10px", fontFamily: "Lora" }}
            placeholder="search for post"
            className="searchInput"
            onChange={(e) => setSearchpost(e.target.value)}
          />
        </div>
      </div>
      <div className="home">
        {posts ? <Posts posts={posts} /> : null}
        <Sidebar />
      </div>
    </>
  );
}
