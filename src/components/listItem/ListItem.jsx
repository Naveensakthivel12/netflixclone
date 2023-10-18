import "./ListItem.scss";
import homeimage from "../../assets/img/homeimage.jpeg";
 import hoimage from "../../assets/img/image.jpg";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import { useState } from "react";
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  //  const trailer1="https://player.vimeo.com/video/716066096?h=b0e29dee9c";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={hoimage}
        alt=""
      />
  
      {isHovered && (
        <>
          <video src={trailer} type="video/mp4" autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowRoundedIcon className="icon" />
              <AddRoundedIcon className="icon" />
              <ThumbUpRoundedIcon className="icon" />
              <ThumbDownRoundedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2022</span>
            </div>
            <div className="desc">
            In the film, an Australian black ops mercenary takes on a mission to save an 
            Indian drug lord's kidnapped son in Dhaka, Bangladesh, but the mission goes 
            awry when he is double-crossed.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}