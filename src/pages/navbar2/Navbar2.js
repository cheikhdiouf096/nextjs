"use client"
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";

import { 
  Navbar2Container, 
  Navbar2Nav, 
  Title2Container, 
  Title2, 
  Toolbar2, 
  BellIcon2, 
  Profile2Image, 
  Logout2Icon, 
  ProfileAdminImage, 
  Navbar2Div1,
  Navbar2Div2,
  Flex2Container,
  Search2Container,
  Search2Input,
  Header2Title,
  Header2Subtitle,
  Header2Container,
  Hidden2Container,
  Flex2ColumnContainer,
  Header1Subtitle,
  Header3Title,
  HeaderButtonPlus,
  StyleSpanCreer,
  StyleIconCreer
} from './Navbar2Style';

import ProfileAdmin from "../../app/assets/img2.png"



const Navbar2 = () => {
  return (
    <Navbar2Container>
      <Navbar2Nav>
        <Navbar2Div1>
          <Navbar2Div2>
            <Title2Container>
            <Flex2Container>
                <Title2 aria-current="page">Dashboard</Title2>
            </Flex2Container>
            </Title2Container>
            <Toolbar2>
                <Search2Container>
                    <Search2Input type="text" placeholder="🔎 rechercher"/>
                </Search2Container>
              <BellIcon2>
                <Link href="/notification">
                  <FontAwesomeIcon icon={faBell} color="black"/>
                </Link>
              </BellIcon2>
              <Profile2Image>
                <ProfileAdminImage src={ProfileAdmin} alt='Profile Admin' width={40} height={40} />
              </Profile2Image>
              <Logout2Icon>
                <Link href="/">
                  <FontAwesomeIcon icon={faRightToBracket} color="black"/>
                </Link>
              </Logout2Icon>
            </Toolbar2>
          </Navbar2Div2>
        </Navbar2Div1>
      </Navbar2Nav>
      <Header2Container>
        <Hidden2Container>
          <Flex2ColumnContainer>

            <Header2Title>
              <Header1Subtitle>Hotel</Header1Subtitle>
              <Header2Subtitle>8</Header2Subtitle>
            </Header2Title>

            <Header3Title>
              <Header1Subtitle>
                <Link href="/creerHotel" style={{textDecoration: "none"}}>
                  <HeaderButtonPlus>
                    <StyleIconCreer><FontAwesomeIcon icon={faPlus} size="1x" color="black"/> </StyleIconCreer>
                    <StyleSpanCreer>Creer un nouvel hotel</StyleSpanCreer>
                  </HeaderButtonPlus>
                </Link>
              </Header1Subtitle>
            </Header3Title>

          </Flex2ColumnContainer>
        </Hidden2Container>
      </Header2Container>
    </Navbar2Container>
  );
}

export default Navbar2;
