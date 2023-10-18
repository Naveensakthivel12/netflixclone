import "./Watch.scss";
import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ReactPlayer from 'react-player'
export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
        <ArrowBackOutlinedIcon/>
         Home
        </div>
      <ReactPlayer 
      controls
      progress
   className="video" width="100%" height="100%"
   url="https://youtu.be/BmllggGO4pM" />
   
  </div>
   
  )
}
