import guttersImages from "./guttersImages.json";

const Modal = (props) => {
  const nextPicture = () => {
    if (props.selectedPictureId < guttersImages.length - 1) {
      props.setSelectedPictureId(props.selectedPictureId + 1);
      props.setSelectedPicture(guttersImages[props.selectedPictureId + 1].url);
    }
    return;
  };

  const previousPicture = () => {
    if (props.selectedPictureId > guttersImages[0].id) {
      props.setSelectedPictureId(props.selectedPictureId - 1);
      props.setSelectedPicture(guttersImages[props.selectedPictureId - 1].url);
    }
    return;
  };
  return (
    <div>
      <div
        className="modal"
        style={{ display: props.isOpen ? "flex" : "none" }}
      >
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            <img
              id="modal-img"
              src={props.selectedPicture}
              alt="pics"
              onClick={props.closeModal}
            />
          </div>
          <div className="nextPrevBtn">
            <span
              className="material-icons"
              onClick={previousPicture}
              id="previousbtn"
            >
              arrow_back_ios
            </span>
            <span className="material-icons" onClick={nextPicture} id="nextbtn">
              arrow_forward_ios
            </span>
          </div>
          <div className="modalCloseBtn">
            <span
              className="material-icons"
              onClick={props.closeModal}
              id="btnCloseX"
            >
              close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
