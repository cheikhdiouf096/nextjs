"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import iconRed from "../../app/assets/icon.png";
import { Div1, Div2, Div3, Div4, List, ListLi, RedProductTitle, SidebarContainer, SidebarContainer2, SidebarHeader, SidebarList, StyledLink, StyledSidebarNav, ToggleButton, ToggleWrapper } from './SidebarStyle';
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css"


const Sidebar = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const [chevron, setChevron] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
        setChevron(prevChange => !prevChange);
    };

    return (
        <SidebarContainer>
            <SidebarHeader>
                <StyledSidebarNav className={`${isSidebarActive ? 'active' : ''}`}>
                        <Div1>
                            <Div2>
                                <Div3> <Image src={iconRed} alt='logo Red'/></Div3>
                                <RedProductTitle>Red Product</RedProductTitle>
                                <ToggleWrapper>
                                <ToggleButton onClick={toggleSidebar}>
                                    {chevron ? <FontAwesomeIcon icon={faChevronLeft} size="2x" color='white' style={{ right: '1rem' }} /> : 
                                    <FontAwesomeIcon icon={faChevronRight} size="2x" color='black' style={{marginLeft: '1rem'}}/>}
                                </ToggleButton>
                                </ToggleWrapper>
                            </Div2>
                        </Div1>
                        <SidebarContainer2>
                        <SidebarList>
                        <List>
                            <Div4>
                                Principale
                            </Div4>
                        </List>
                        <ListLi>
                            <Link href="/dashboard">
                                {/* <StyledLink> */}
                                    <FontAwesomeIcon icon={faHome} size='1x'/>
                                    Dashboard
                                {/* </StyledLink> */}
                            </Link>
                        </ListLi>
                        <ListLi>
                            <Link href="./cardHotel">
                            {/* <StyledLink> */}
                                <FontAwesomeIcon icon={faHome} size='1x'/>
                                Listes des Hotels
                            {/* </StyledLink> */}
                            </Link>
                        </ListLi>
                        </SidebarList>
                    </SidebarContainer2>
                </StyledSidebarNav>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar;
