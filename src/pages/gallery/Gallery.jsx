import guttersImages from "./images/guttersImages.json";
import "./gallery.css";
import { useState } from "react";
import Modal from "./images/Modal";
import UpbButton from "../../components/UpButton";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [selectedPictureId, setSelectedPictureId] = useState();

  const openModal = (item) => {
    setIsOpen(true);
    setSelectedPictureId(item.id);
    setSelectedPicture(item.url);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPicture(null);
  };

  const guttersData = () => (
    <div className="mapImgContainer">
      {guttersImages
        .filter((item) => item.title === "gutter")
        .map((item, index) => {
          return (
            <img
              key={item.id}
              className="image"
              src={item.url}
              alt="pics"
              onClick={() => {
                openModal(item);
              }}
            />
          );
        })}
    </div>
  );

  const protectionData = () => (
    <div className="mapImgContainer">
      {guttersImages
        .filter((item) => item.title === "protection")
        .map((item, index) => {
          return (
            <img
              key={item.id}
              className="image"
              src={item.url}
              alt="pics"
              onClick={() => {
                openModal(item);
              }}
            />
          );
        })}
    </div>
  );

  const soffitData = () => (
    <div className="mapImgContainer">
      {guttersImages
        .filter((item) => item.title === "soffit")
        .map((item, index) => {
          return (
            <img
              key={item.id}
              className="image"
              src={item.url}
              alt="pics"
              onClick={() => {
                openModal(item);
              }}
            />
          );
        })}
    </div>
  );

  const aluData = () => (
    <div className="mapImgContainer">
      {guttersImages
        .filter((item) => item.title === "alu")
        .map((item, index) => {
          return (
            <img
              key={index}
              className="image"
              src={item.url}
              alt="pics"
              onClick={() => {
                openModal(item);
              }}
            />
          );
        })}
    </div>
  );

  console.log("selectedPicture: ", selectedPicture);
  console.log("selectedPictureId: ", selectedPictureId);
  return (
    <div className="kkl">
      <UpbButton />
      <h1 className="gallery-title">Gutter</h1>
      {guttersData()}
      <h1 className="gallery-title">Gutter Protection</h1>
      {protectionData()}
      <h1 className="gallery-title">Soffit And Fascia</h1>
      {soffitData()}
      <h1 className="gallery-title">Aluminum Roof</h1>
      {aluData()}
      <Modal
        selectedPicture={selectedPicture}
        selectedPictureId={selectedPictureId}
        setSelectedPicture={setSelectedPicture}
        setSelectedPictureId={setSelectedPictureId}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Gallery;
