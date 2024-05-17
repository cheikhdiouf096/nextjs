"use client"
import React from "react";
import Image from "next/image";
import iconRed from "../assets/icon.png";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledButton, StyledCheckboxContainer, StyledCheckboxInput, StyledCheckboxText, StyledContainer, StyledForgotPasswordLink, StyledForm, StyledFormContainer, StyledFormInput, StyledFormLabel, StyledIcon, StyledInfo, StyledInput, StyledLogoContainer, StyledSignupLink, StyledText, } from "../connexion/ConnexionStyle";


const Inscription = () => {
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledIcon>
          <Image src={iconRed} alt="logo Red" />
        </StyledIcon>
        <StyledText>Red Product</StyledText>
      </StyledLogoContainer>
      <StyledFormContainer>
        <StyledForm>
          <StyledInfo>Inscrivez-vous en tant qu'admin</StyledInfo>
          <StyledFormInput>
            <StyledFormLabel htmlFor="username">Prénom</StyledFormLabel>
            <StyledInput id="username" type="text" />
          </StyledFormInput>
          <StyledFormInput>
            <StyledFormLabel htmlFor="email">Email</StyledFormLabel>
            <StyledInput id="email" type="email" />
          </StyledFormInput>
          <StyledFormInput>
            <StyledFormLabel htmlFor="password">Mot de passe</StyledFormLabel>
            <StyledInput id="password" type="password" />
          </StyledFormInput>
          <StyledCheckboxContainer>
            <StyledCheckboxInput id="checkbox" type="checkbox"/>
            <StyledCheckboxText>
              Accepter les termes et la politique
            </StyledCheckboxText>
          </StyledCheckboxContainer>
          <StyledButton type="button">Inscription</StyledButton>
        </StyledForm>
      </StyledFormContainer>
      <StyledSignupLink>
        Vous avez déjà un compte? <Link href="/">Se connecter</Link>
      </StyledSignupLink>
    </StyledContainer>
  );
};

export default Inscription;
