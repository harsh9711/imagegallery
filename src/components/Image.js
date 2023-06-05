import React, { useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import "./modal.css";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { saveAs } from "file-saver";

const Image = ({ key, imgSrc, f_name, l_name, insta, profile_img, likes }) => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const downloadImage = () => {
    saveAs(imgSrc, "image.jpg");
  };

  return (
    <>
      <div className="Image-box">
        <div className="Image-box-img" onClick={toggleModal}>
          <img className="Image-img" src={imgSrc} alt="" />
        </div>
        <div className="Image-info">
          <div className="Image-profile">
            <img className="Image-profile-img" src={profile_img} alt="" />
            <div className="Image-username">
              <h3>{f_name + " " + l_name}</h3>
              <span className="Image-insta">@{insta}</span>
            </div>
          </div>
          <div className="Image-like">
            <ThumbUpOutlinedIcon
              style={{ fontSize: "17px", cursor: "pointer" }}
            />
            <span>{likes}</span>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="Modal-Image-box">
              <div className="Image-box-img">
                <img className="Modal-Image-img" src={imgSrc} alt="" />
              </div>
              <div
                className="Modal-Image-info"
                style={{ backgroundColor: "white" }}
              >
                <div className="Image-profile">
                  <img className="Image-profile-img" src={profile_img} alt="" />
                  <div className="Image-username">
                    <h3>{f_name + " " + l_name}</h3>
                    <span className="Image-insta">@{insta}</span>
                  </div>
                </div>
                <div className="Image-like">
                  <ThumbUpOutlinedIcon
                    style={{ fontSize: "17px", cursor: "pointer" }}
                  />
                  <span>{likes}</span>
                </div>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <span>X</span>
            </button>
            {/* <a href={imgSrc} download> */}
            <button className="download-btn" onClick={downloadImage}>
              <FileDownloadOutlinedIcon
                style={{ fontSize: "20px", marginRight: "5px" }}
              />
              Download Image
            </button>
            {/* </a> */}
            <button className="share-btn">
              <ShareOutlinedIcon
                style={{ fontSize: "15px", marginRight: "5px" }}
              />
              Share
            </button>
            <button className="info-btn">
              <InfoOutlinedIcon
                style={{ fontSize: "15px", marginRight: "5px" }}
              />
              Info
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
