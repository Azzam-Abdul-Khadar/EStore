import React from "react";
import Slider from "./Slider";
import Container from "./Container";
import styles from "@/styles/home/Hero.module.css";


const HeroSection = () => {
  return (
    <Container className='flex'>
      <section className={styles.hero}>
        <div className={`${styles.textSection} text-gray-700`}>
          <h1>
            One stop solution <span className="text-pink-500">E-Store</span>{" "}
          </h1>
          <p>Discove the latest headphones, earphones, mobiles, tablets.</p>
          <p>Exclusive deals just for you!</p>
          <button className={styles.ctaButton}>Shop Now</button>
        </div>
      </section>
      <Slider />
    </Container>
  );
};

export default HeroSection;
