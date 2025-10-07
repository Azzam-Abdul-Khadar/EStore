"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "@/styles/home/Hero.module.css";

const images = [
  "https://m.media-amazon.com/images/I/61gTXH8JGuL.jpg",
  "https://dailydeals365.in/wp-content/uploads/2023/08/51Prg4Smx-L._SL1500_.jpg",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentValue)=>{
        if(currentValue == images.length - 1){
          return 0;
        }else{
          return currentValue + 1;
        }
      })
    }, 2000);

    return ()=>{
      clearInterval(interval);
    }
  },[]
);

  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((images, index) => {
          return (
            // <Image alt={`Slider ${index + 1}`} className={`${styles.slide} ${index === current.slide? styles.active:''}`} src={image}
            // key={index} fill />
            <Image
              src={images}
              alt={"Slide" + index}
              key={"Slide" + index}
              fill
              className={`${styles.slide} ${
                currentSlide == index && styles.active
              }`}
              style={{ objectFit: "cover" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
