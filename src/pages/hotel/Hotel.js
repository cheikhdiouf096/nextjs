"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../app/assets/img1.png";
import img2 from "../../app/assets/img2.png";
import img3 from "../../app/assets/img3.png";
import img4 from "../../app/assets/img4.png";
import img5 from "../../app/assets/img5.png";
import img6 from "../../app/assets/img6.png";

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
} from './HotelStyle';


const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Hotel Terrou-Bi",
    location: "Boulevard Martin Luther King Dakar, 11500",
    fees: "25000 XOF par nuit",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "King Fahd Palace",
    location: "Rte des Almadies, Dakar",
    fees: "20000 XOF par nuit",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Radisson Blu Hotel",
    location: "Rte de la Corniche O, Dakar 16868",
    fees: "22000 XOF par nuit",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Pullman Dakar Teranga",
    location: "Place de l`Independance, 10 Rue PL 29, Dakar",
    fees: "30000 XOF par nuit",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Hôtel Lac Rose",
    location: "Lac Rose, Dakar",
    fees: "25000 XOF par nuit",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Hôtel Saly",
    location: "Mbour, Sénégal",
    grade: "CULTURAL RELAX",
    fees: "20000 XOF par nuit",
  },
];

function Hotel() {
  return (
    <HotelSection>
      <SecContent>
        {Data.map(({ id, imgSrc, destTitle, location, fees }) => {
          return (
            <SingleDestination key={id} data-aos="fade-up">
              <ImageDiv>
                <Image src={imgSrc} alt={destTitle} />
              </ImageDiv>
              <CardInfo>
                <Continent>
                  <Address>{location}</Address>
                </Continent>
                <DestTitle>{destTitle}</DestTitle>
                <Price>{fees}</Price>
              </CardInfo>
            </SingleDestination>
          );
        })}
      </SecContent>
    </HotelSection>
  );
}

export default Hotel;
