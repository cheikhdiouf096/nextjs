"use client"
import React from "react";
import Link from "next/link";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledCheckboxContainer, StyledCheckboxInput, StyledCheckboxText, StyledContainer, StyledForgotPasswordLink, StyledForm, StyledFormContainer, StyledFormInput, StyledFormLabel, StyledIcon, StyledInfo, StyledInput, StyledLogoContainer, StyledSignupLink, StyledSubmitButton, StyledText } from "./ConnexionStyle";


const Connexion = () => {
  return (
    <>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledIcon>
            <Image src={iconRed} alt="logo Red" />
          </StyledIcon>
          <StyledText>Red Product</StyledText>
        </StyledLogoContainer>
        <StyledFormContainer>
          <StyledForm>
            <StyledInfo>Connectez-vous en tant qu'admin</StyledInfo>
            <StyledFormInput>
              <StyledFormLabel htmlFor="email">Email</StyledFormLabel>
              <StyledInput id="email" type="email" />
            </StyledFormInput>
            <StyledFormInput>
              <StyledFormLabel htmlFor="password">Mot de passe</StyledFormLabel>
              <StyledInput id="password" type="password" />
            </StyledFormInput>
            <StyledCheckboxContainer>
              <StyledCheckboxInput
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
              />
              <StyledCheckboxText>Garder-moi connecter</StyledCheckboxText>
            </StyledCheckboxContainer>
            <Link href="/dashboard">
              <StyledSubmitButton type="submit">Se connecter</StyledSubmitButton>
            </Link>
          </StyledForm>
        </StyledFormContainer>
        <Link href="/forgotpwd">
        <StyledForgotPasswordLink>
            Mot de passe oublié?
        </StyledForgotPasswordLink>
        </Link>
        <StyledSignupLink>
          Vous n'avez pas de compte?{" "}
          <Link href="/inscription">Inscription</Link>
        </StyledSignupLink>
      </StyledContainer>
    </>
  );
};

export default Connexion;
