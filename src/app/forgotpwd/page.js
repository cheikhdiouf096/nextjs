"use client"
import React from "react";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledBackToLoginLink, StyledButton, StyledContainer,  StyledForm, StyledFormContainer, StyledFormInput, StyledFormLabel, StyledIcon, StyledInfo, StyledInput, StyledLogoContainer, StyledText, StyledTextInfo } from "../connexion/ConnexionStyle";


const ForgotPwd = () => {
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
            <StyledInfo>Mot de passe oublié?</StyledInfo>
            <StyledTextInfo>
              Entrez votre adresse e-mail ci-dessous et nous vous envoyons des
              instructions sur la façon de modifier votre mot de passe.
            </StyledTextInfo>
            <StyledFormInput>
              <StyledFormLabel htmlFor="email" className="font-bold" style={{color: '#45484B'}}>Email</StyledFormLabel>
              <StyledInput id="email" type="email" />
            </StyledFormInput>
            <StyledButton type="button">Envoyez</StyledButton>
          </StyledForm>
        </StyledFormContainer>
        <StyledBackToLoginLink>
          Revenir à la{" "}
          <Link href="/">connexion</Link>
        </StyledBackToLoginLink>
      </StyledContainer>
    </>
  );
};

export default ForgotPwd;
