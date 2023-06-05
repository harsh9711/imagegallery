import React, { useEffect, useState } from "react";
import Mid from "./components/Mid";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import "./components/Mid.css";
import "./components/Image.css";
import Image from "./components/Image";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [unsplashData, setunsplashData] = useState([]);
  const [show,setshow]=useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      var url="";
      if(value==="")
      {
        setshow(false);
        url = `https://api.unsplash.com/search/photos?client_id=uPbB5TS91_HVjEfAXK5TElsMvZf37cPf9MShuobzH6Y&query=${"random"}&per_page=20`;
      }
      else{
        setshow(true);
      url = `https://api.unsplash.com/search/photos?client_id=uPbB5TS91_HVjEfAXK5TElsMvZf37cPf9MShuobzH6Y&query=${value}&per_page=20`;
      }
      const response = await fetch(url);
      const respJson = await response.json();
      if(respJson.results.length===0)
      {
        return;
      }
      setunsplashData(respJson.results);
    };
    fetchImages();
  }, [value]);

  return (
    <>
      <div
        style={{
          backgroundColor: isActive ? "#313131" : "#FFFFFF",
          color: isActive ? "white" : "black",
        }}
      >
        <Navbar
          isActive={isActive}
          setIsActive={setIsActive}
          value={value}
          setValue={setValue}
        />
        {!show && <Mid value={value} setValue={setValue} />}
        <div className="Image-container">
          <div className="Image-wrapper">
            {unsplashData.map((item) => {
              return (
                <Image
                  key={item.id}
                  imgSrc={item.urls.regular}
                  f_name={item.user.first_name}
                  l_name={item.user.last_name}
                  insta={item.user.instagram_username}
                  profile_img={item.user.profile_image.large}
                  likes={item.likes}
                />
              );
            })}
          </div>
        </div>
      </div>
      

    </>
  );
}

export default App;
