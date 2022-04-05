import guttersImages from "./images/guttersImages.json";
import protectionImages from "./images/protectionImages.json";
import soffitAndFascia from "./images/soffitAndFascia.json";
import aluminumRoof from "./images/aluminumRoof.json";
import "./gallery.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openModal = (item) => {
    setIsOpen(true);
    setSelectedPicture(item.url);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPicture(null);
  };

  return (
    <div className="kkl">
      <h1 className="gallery-title">Gutter</h1>
      <div className="image-container">
        {guttersImages.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="image"
                src={item.url}
                width={220}
                alt="pics"
                onClick={() => openModal(item)}
              />
              <Modal
                className="modal"
                isOpen={isOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
              >
                <div className="modal-container">
                  <div className="modal-pictures">
                    <img
                      id="modal-img"
                      src={selectedPicture}
                      alt="pics"
                      onClick={closeModal}
                    />
                  </div>
                </div>
              </Modal>
            </div>
          );
        })}
      </div>

      <h1 className="gallery-title">Gutter Protection</h1>
      <div className="image-container">
        {protectionImages.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="image"
                src={item.url}
                width={220}
                alt="pics"
                onClick={() => openModal(item)}
              />
              <div className="modal" id="modal">
                <Modal
                  className="modal"
                  id="modal"
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  ariaHideApp={false}
                >
                  <div className="modal-container">
                    <div className="modal-pictures">
                      <img
                        id="modal-img"
                        src={selectedPicture}
                        alt="pics"
                        onClick={closeModal}
                      />
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="gallery-title">Soffit and Fascia</h1>
      <div className="image-container">
        {soffitAndFascia.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="image"
                src={item.url}
                width={220}
                alt="pics"
                onClick={() => openModal(item)}
              />
              <div className="modal" id="modal">
                <Modal
                  className="modal"
                  id="modal"
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  ariaHideApp={false}
                >
                  <div className="modal-container">
                    <div className="modal-pictures">
                      <img
                        id="modal-img"
                        src={selectedPicture}
                        alt="pics"
                        onClick={closeModal}
                      />
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="gallery-title">Aluminum Roof</h1>
      <div className="image-container">
        {aluminumRoof.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="image"
                src={item.url}
                width={220}
                alt="pics"
                onClick={() => openModal(item)}
              />
              <div className="modal" id="modal">
                <Modal
                  className="modal"
                  id="modal"
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  ariaHideApp={false}
                >
                  <div className="modal-container">
                    <div className="modal-pictures">
                      <img
                        id="modal-img"
                        src={selectedPicture}
                        alt="pics"
                        onClick={closeModal}
                      />
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          );
        })}
      </div>
      <div className="back-button">
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
