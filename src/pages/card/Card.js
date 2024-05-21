'use client'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faP } from '@fortawesome/free-solid-svg-icons/faP';
import { BorderIcon, CardContainer, CardInfo, Content, IconRow, Number, Partie, StyledPrice } from '../../styles/Card.Style';

const iconMap = {
  faEnvelopeOpen: faEnvelopeOpen,
  faUserFriends: faUserFriends,
  faP: faP
};

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/home')
      .then(response => response.json())
      .then(data => {
        setData(data.Card);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <CardContainer>
      <Content>
        {data.map(({ id, icon, number, partie, text, background }) => (
          <IconRow key={id} data-aos="fade-up">
            <BorderIcon style={{ background }}>
              <FontAwesomeIcon icon={iconMap[icon]} size='1x' />
            </BorderIcon>
            <CardInfo>
              <StyledPrice>
                <Number>{number}</Number>
                <Partie>{partie}</Partie>
              </StyledPrice>
              <StyledPrice>{text}</StyledPrice>
            </CardInfo>
          </IconRow>
        ))}
      </Content>
    </CardContainer>
  );
}

export default Card;
