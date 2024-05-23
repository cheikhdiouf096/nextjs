"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import img1 from "../../app/assets/img1.png";
// import img2 from "../../app/assets/img2.png";
// import img3 from "../../app/assets/img3.png";
// import img4 from "../../app/assets/img4.png";
// import img5 from "../../app/assets/img5.png";
// import img6 from "../../app/assets/img6.png";
// import img7 from "../../app/assets/img7.png";
// import img8 from "../../app/assets/img8.png";

import {
  HotelSection,
  SecContent,
  SingleDestination,
  ImageDiv,
  CardInfo,
  Continent,
  Address,
  DestTitle,
  Price,
} from '../../styles/Hotel.Style';





const Hotel = () => {

  const [data, setData] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080/api/hotels')
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);


  return (
    <HotelSection>
      <SecContent>
        {data.map(({ id, hotelName, price, location }) => {
          return (
            <SingleDestination key={id} data-aos="fade-up">
              <ImageDiv>
                {/* <Image src={img} alt={hotelName} /> */}
              </ImageDiv>
              <CardInfo>
                <Continent>
                  <Address>{location}</Address>
                </Continent>
                <DestTitle>{hotelName}</DestTitle>
                <Price>{price}</Price>
              </CardInfo>
            </SingleDestination>
          );
        })}
      </SecContent>
    </HotelSection>
  );
};

export default Hotel;
