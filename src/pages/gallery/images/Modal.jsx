const Modal = (props) => {
  const nextPicture = () => {
    console.log(props.selectedPictureId);
    props.setSelectedPictureId(props.selectedPictureId + 1);
    console.log(props.selectedPictureId);
  };

  const previousPicture = () => {};

  return (
    <div>
      <div
        className="modal"
        style={{ display: props.isOpen ? "flex" : "none" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="previousbtn"
              onClick={previousPicture}
            >
              previous
            </button>{" "}
            <button type="button" className="nextbtn" onClick={nextPicture}>
              next
            </button>
            <button
              type="button"
              className="btnCloseX"
              onClick={props.closeModal}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <img
              id="modal-img"
              src={props.selectedPicture}
              alt="pics"
              onClick={props.closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
