"use client"
import React from "react";
import Link from "next/link";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledCheckboxContainer, StyledCheckboxInput, StyledCheckboxText, StyledContainer, StyledForgotPasswordLien, StyledFrm, Form, StyledFrmInput, StyledFrmLabel, StyledIcon, StyledInfo, StyledInput, StyledLogoContainer, StyledSignupLien, StyledSubmitButton, StyledText } from "../../styles/Connexion.Style";


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
        <Form>
          <StyledFrm>
            <StyledInfo>Connectez-vous en tant qu'admin</StyledInfo>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="email">Email</StyledFrmLabel>
              <StyledInput id="email" type="email" />
            </StyledFrmInput>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="password">Mot de passe</StyledFrmLabel>
              <StyledInput id="password" type="password" />
            </StyledFrmInput>
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
          </StyledFrm>
        </Form>
        <Link href="/forgotpwd">
        <StyledForgotPasswordLien>
            Mot de passe oublié?
        </StyledForgotPasswordLien>
        </Link>
        <StyledSignupLien>
          Vous n'avez pas de compte?{" "}
          <Link href="/inscription">Inscription</Link>
        </StyledSignupLien>
      </StyledContainer>
    </>
  );
};

export default Connexion;
