"use client"
import React from "react";
import Image from "next/image";
import iconRed from "../assets/icon.png";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, StyledButton, StyledCheckboxContainer, StyledCheckboxInput, StyledCheckboxText, StyledContainer, StyledFrm, StyledFrmInput, StyledFrmLabel, StyledIcon, StyledInfo, StyledInput, StyledLogoContainer, StyledSignupLien, StyledText, } from "../../styles/Connexion.Style";


const Inscription = () => {
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledIcon>
          <Image src={iconRed} alt="logo Red" />
        </StyledIcon>
        <StyledText>Red Product</StyledText>
      </StyledLogoContainer>
      <Form>
        <StyledFrm>
          <StyledInfo>Inscrivez-vous en tant qu'admin</StyledInfo>
          <StyledFrmInput>
            <StyledFrmLabel htmlFor="username">Prénom</StyledFrmLabel>
            <StyledInput id="username" type="text" />
          </StyledFrmInput>
          <StyledFrmInput>
            <StyledFrmLabel htmlFor="email">Email</StyledFrmLabel>
            <StyledInput id="email" type="email" />
          </StyledFrmInput>
          <StyledFrmInput>
            <StyledFrmLabel htmlFor="password">Mot de passe</StyledFrmLabel>
            <StyledInput id="password" type="password" />
          </StyledFrmInput>
          <StyledCheckboxContainer>
            <StyledCheckboxInput id="checkbox" type="checkbox"/>
            <StyledCheckboxText>
              Accepter les termes et la politique
            </StyledCheckboxText>
          </StyledCheckboxContainer>
          <StyledButton type="button">Inscription</StyledButton>
        </StyledFrm>
      </Form>
      <StyledSignupLien>
        Vous avez déjà un compte? <Link href="/">Se connecter</Link>
      </StyledSignupLien>
    </StyledContainer>
  );
};

export default Inscription;
