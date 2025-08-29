import '../styles/AboutUs.css';
import AboutImage from '../assets/About-us.jpg'; // Optional image

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>Josephine's Empire</h1>
        <p>
          Fashion is confidence, elegance, and self-expression. At Josephine’s Empire, we bring you the latest trends and timeless styles.
        </p>
      </section>

      {/* Brand Story Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2022, Josephine’s Empire is committed to providing the best fashion and accessories. From clothes to shoes, bags, and jewellery, we curate collections that inspire confidence and style.
          </p>

          <h2>Our Values</h2>
          <p>
            Quality, elegance, and customer satisfaction are at the heart of everything we do. We strive to make online shopping a seamless and enjoyable experience.
          </p>
        </div>

        <div className="about-image">
          <img src={AboutImage} alt="Our story" />
        </div>
      </section>
    </div>
  );
}
