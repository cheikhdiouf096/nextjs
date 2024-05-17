"use client"
import Image from 'next/image';
import styled from 'styled-components';

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



