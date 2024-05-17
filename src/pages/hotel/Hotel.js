"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../app/assets/img1.png";
import img2 from "../../app/assets/img2.png";
import img3 from "../../app/assets/img3.png";
import img4 from "../../app/assets/img4.png";
import img5 from "../../app/assets/img5.png";
import img6 from "../../app/assets/img6.png";
import styled from "styled-components";

// import {
//   HotelSection,
//   SecContent,
//   SingleDestination,
//   ImageDiv,
//   CardInfo,
//   Continent,
//   Address,
//   DestTitle,
//   Price,
// } from './HotelStyle';


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


export const HotelSection = styled.section`
  margin: 2rem 0;
`;

export const SecContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SingleDestination = styled.div`
  margin: 0 auto;
  height: 100%;
  display: grid;
  row-gap: 10px;
  align-items: center;
  border-radius: 10px;
  background: var(--cardBg);
  box-shadow: 0 2px 4 rgba(140, 140, 141, 0.549);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;


  @media screen and (min-width: 320px) {
    width: auto;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1024px) {
    width: 260px;
  }
  @media screen and (min-width: 1280px) {
    width: 350px;
    position: relative;
    left: 1rem;
  }
  @media screen and (min-width: 1536px) {
    width: 350px;
  }
`;

export const ImageDiv = styled.div`
  height: 150px;
  width: 250px;
  overflow: hidden;

  @media screen and (min-width: 320px) {
    width: auto;
    height: 200px
  };
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 200px;
  };
  @media screen and (min-width: 1024px) {
    width: 260px;
    height: 200px;
  };
  @media screen and (min-width: 1280px) {
    width: 350px;
    height: 200px;
  };
  @media screen and (min-width: 1536px) {
    width: 350px;
    height: 200px;
  }
`;

export const CardInfo = styled.div`
  padding: 1rem;
`;

export const Continent = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const Address = styled.span`
  font-size: 0.6rem;
  color: #555;

  @media screen and (min-width: 320px) {
    font-size: 0.8rem;
    font-weight: bold;
  }
  @media screen and (min-width: 1024px) {
    font-size: 0.6rem;
    font-weight: bold;
  }
`;

export const DestTitle = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const Price = styled.div`
  font-size: 0.9rem;
  color: #ff5a5f;
`;


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
