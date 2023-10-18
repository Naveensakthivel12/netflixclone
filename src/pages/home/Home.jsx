
import Navbar from "../../components/navbar/Navbar";
import "./home.scss"
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState,useEffect} from "react";
import axios  from "axios";
function Home({type}) {
    const [lists,setLists]=useState([]);
    const [genre,setGenre]=useState(null)
    useEffect(()=>{
        const getRandomLists=async()=>{
            try{
                const res=await axios.get(
                    `lists${type ? "?type=" +type :""}&${genre ? "&genre="+genre : ""}`,{
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YThmMTkzOTQ1ZWI5ODU5MzJjYjAwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTA5MzkxMSwiZXhwIjoxNjg5NTI1OTExfQ.PDfTjBYHrA1rv3ch_Gtyc8zsPUJkZ-_5Q91lPd_jyaE"
                    }
                 }
                )
                 console.log(res);
            }catch(err){
                console.log(err);
            }
        }
        getRandomLists();
    },[type,genre]);
    return (
        <div className='home'>
      <Navbar />
      <Featured type={type}/>
         <List/>
         <List/>
         <List/>
         <List/>
        </div>
    )
}

export default Home
