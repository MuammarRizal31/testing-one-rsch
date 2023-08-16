import Carousel from "react-bootstrap/Carousel";
import dataCarousel from "./data/datacarousel";
import "./Carousel-home.css";

const CarouselHome = () => {
  return (
    <>
      <Carousel data-bs-theme="dark" className="carousel-rsch">
        {dataCarousel.map(({ image, caption, label }, index) => {
          return (
            <Carousel.Item key={index} interval={2500}>
              <img className="d-block mx-auto" src={image} alt={label} />
              <Carousel.Caption>
                <h5>{label}</h5>
                <p>{caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselHome;
