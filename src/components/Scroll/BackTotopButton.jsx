import React, { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import "./BackTotopButton.css";


export default function BackTotopButton () {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
       {backToTopButton && (
        <button className="botonScroll" onClick={scrollUp}>
          <BsChevronUp className="BsChevronUp"/>
        </button>
      )}
    </div>
  );
};