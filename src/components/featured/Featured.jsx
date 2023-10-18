import "./Featured.scss"
import himage from "../../assets/img/hname.png";
import homeimage from "../../assets/img/homeimage.jpeg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from "react-router-dom";
import Home from "../../pages/home/Home";
export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
              <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
            
            </select>
            </div>
            )
        }
              
    <img   width="100%" src={homeimage} alt="" />
    <div className="info">
          <img
              src={himage} alt="" />
          <span className="desc">
              Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster.<br></br><br/>
              <span className="star"> Starring </span>: Chris Hemsworth,Golshifteh Farahani,Tornike Gogrichiani
          </span>
          <div className="buttons">
              <button className="play">
                  <PlayArrowIcon />
                  <Link to={"/watch"}><span>Play</span></Link>
              </button>
              <button className="more">
                  <InfoOutlinedIcon />
                  <span>Info</span>
              </button>
          </div>
      </div>
    </div>

  )
}
