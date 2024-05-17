"use client"
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';

// import { 
//   NavbarContainer, 
//   NavbarNav, 
//   TitleContainer, 
//   Title, 
//   Toolbar, 
//   BellIcon, 
//   ProfileImage, 
//   LogoutIcon, 
//   ProfileAdminImage, 
//   DivNv1,
//   DivNav2,
//   FlexContainer,
//   SearchContainer,
//   SearchInput,
//   HeaderTitle,
//   HeaderSubtitle,
//   HeaderContainer,
//   HiddenContainer,
//   FlexColumnContainer
// } from './NavabarStyle';

import ProfileAdmin from "../../app/assets/img2.png"
import styled from "styled-components";


export const NavbarContainer = styled.div`
    border-bottom: 1px solid #e2e8f0;
`;

export const DivNv1 = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1rem; 
  
  @media (min-width: 567px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem; 
  }
`;

export const DivNav2 = styled.div`
  position: relative;
  display: flex;
  height: 3.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;


export const NavbarNav = styled.nav`
  border-bottom: 1px solid #e2e8f0;
`;

export const TitleContainer = styled.div`

`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: between;
`;

export const Title = styled.span`
  position: relative;
  color: var(--text-dark); 
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: bold; 

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }

`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;


export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  border: 1px solid #e2e8f0;
  outline: none;
  border-radius: 9999px;
  padding: 0.5rem;
  

  @media (min-width: 320px) {
    width: auto;
  }

  
`;

export const BellIcon = styled.div`
  /* Ajoutez ici les styles pour l'icône de la cloche */
`;

export const ProfileImage = styled.div`
  width: 2.5rem; /* Correspond à h-10 */
  height: 2.5rem; /* Correspond à w-10 */
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const LogoutIcon = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }

`;

export const ProfileAdminImage = styled(Image)`

`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--text-dark);
  border-radius: 0.375rem;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const HeaderSubtitle = styled.span`
  font-size: 0.875rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    align-items: stretch; 
    justify-content: flex-start;
  }
`;

export const HiddenContainer = styled.div`
  display: none;

  @media (min-width: 640px) {
    display: block;
    margin-left: 1.5rem; /* Correspond à sm:ml-6 */
  }
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  margin: 0.5rem 0;
`;


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
