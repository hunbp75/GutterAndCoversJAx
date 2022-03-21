import "./feedback.css";

const Feedback = () => {
  return (
    <div>
      <form className="form">
        <div className="feedback-form">
          <h1>Feedback Form</h1>
          <div className="feedback-input">
            <input type="text" placeholder="Your name"></input>
            <input type="email" placeholder="Your email"></input>
            <input type="text" placeholder="Your message"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
