"use client"
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";

import { 
  NavbarContainer, 
  NavbarNav, 
  TitleContainer, 
  Title, 
  Toolbar, 
  BellIcon, 
  ProfileImage, 
  LogoutIcon, 
  ProfileAdminImage, 
  DivNv1,
  DivNav2,
  FlexContainer,
  SearchContainer,
  SearchInput,
  HeaderTitle,
  HeaderSubtitle,
  HeaderContainer,
  HiddenContainer,
  FlexColumnContainer
} from './NavabarStyle';

import ProfileAdmin from "../../app/assets/img2.png"

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarNav>
        <DivNv1>
          <DivNav2>
            <TitleContainer>
            <FlexContainer>
                <Title aria-current="page">Dashboard</Title>
            </FlexContainer>
            </TitleContainer>
            <Toolbar>
                <SearchContainer>
                    <SearchInput type="text" placeholder="🔎 rechercher"/>
                </SearchContainer>
              <BellIcon>
                <Link href="/notification">
                  <FontAwesomeIcon icon={faBell} color="black" />
                </Link>
              </BellIcon>
              <ProfileImage>
                <ProfileAdminImage src={ProfileAdmin} alt='Profile Admin' width={40} height={40} />
              </ProfileImage>
              <LogoutIcon>
                <Link href="/">
                  <FontAwesomeIcon icon={faRightToBracket} color="black"/>
                </Link>
              </LogoutIcon>
            </Toolbar>
          </DivNav2>
        </DivNv1>
      </NavbarNav>
      <HeaderContainer>
        <HiddenContainer>
          <FlexColumnContainer>
            <HeaderTitle>
              Bienvenue sur RED Product
              <HeaderSubtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</HeaderSubtitle>
            </HeaderTitle>
          </FlexColumnContainer>
        </HiddenContainer>
      </HeaderContainer>
    </NavbarContainer>
  );
}

export default Navbar;
