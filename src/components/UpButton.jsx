import { useState, useEffect } from "react";

const UpbButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [on, setOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOn(!on);
    }, 1000);
  }, [on]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
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

  return (
    <div className="back-button">
      {showButton && (
        <button
          onClick={scrollToTop}
          className={on ? "back-to-top" : "red-back-button"}
        >
          &#8679;
        </button>
      )}
    </div>
  );
};

export default UpbButton;
