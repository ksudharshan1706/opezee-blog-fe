import Sidebar from "../../componants/sidebar/Sidebar";
import SinglePost from "../../componants/singlepost/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
