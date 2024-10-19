import React from "react";
import styles from "./AboutUs.module.scss"; // Import the associated styles

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <h1>About Us</h1>
        <p>
          Welcome to <strong>{process.env.NEXT_PUBLIC_APP_NAME}</strong>! We are dedicated to providing top-notch services and products that enhance your daily life.
        </p>
        <p>
          Our mission is to deliver high-quality solutions tailored to meet the unique needs of our customers. Whether you&apos;re looking for technology innovation or creative expertise, we aim to exceed expectations at every step of the way.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Innovation: Constantly evolving and pushing boundaries.</li>
          <li>Customer Focus: Putting customer needs at the heart of everything we do.</li>
          <li>Integrity: Upholding the highest standards of honesty and fairness.</li>
          <li>Teamwork: Collaborating for shared success.</li>
        </ul>
        <p>
          We believe in continuous growth, improvement, and collaboration. Thank you for choosing us on this journey. Together, we strive to build a better future.
        </p>
        <p>
          Feel free to reach out with any questions or feedback. We&apos;re here to help!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
