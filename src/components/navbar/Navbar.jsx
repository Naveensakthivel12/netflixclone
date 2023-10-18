import {useState} from 'react'
import "./navbar.scss"
import Logo from '../../assets/img/logo.svg'
import profile from '../../assets/img/profile.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link, useHistory} from "react-router-dom";
function Navbar() {
  const history = useHistory();
  const [isScrolled, setIsScrolled] = useState(false);
  //  console.log(window.onscroll)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    // return () => (window.onscroll=null);
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt='' />

          <span>Home</span>
          <Link to="/series" className='link'>
          <span>Series</span>
          </Link>
          <Link to="/movies" className='link'>
          <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
          <span></span>
        </div>

        <div className="right">
          <SearchIcon className='icon' />
          <span>KID</span>
          <NotificationsIcon className='icon' />
          <img src={profile} />
          <div className='profile'>
            <ArrowDropDownIcon className='icon' />
            <div className="options">
              <span>Settings</span>
              <Link onClick={() =>{ history.push('/login'); window.location.reload()}} style={{ textDecoration: 'none', color: 'white' }}><span>Logout</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar