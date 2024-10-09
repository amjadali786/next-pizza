import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["pizza", "burger", "milkshake"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {
        imageProp.map((image, index) => {
          return (
            <div
            key={index}
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
            >
              <img
              // src={`https://source.unsplash.com/random/900x600/?${image}`}
              src="https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pizza"
            />
            </div>
          )
        })
      }
    </Carousel>
  );
}

export default CarouselComponent;
