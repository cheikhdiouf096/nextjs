"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledFormInput} from "../connexion/ConnexionStyle";
import vector from "../assets/Vector.png"
import {
  Container,
  Card,
  Title,
  Header,
  Piod,
  Row,
  FrGr2oup,
  Label,
  Input,
  Select,
  Footer,
  Dropzone,
  StyledFrInput,
  StyledSubmitCreer,
  FlexEnd,
  SpanAjouterPhoto
} from "../creerHotel/CreerStyle";
import Link from "next/link";
import Image from "next/image";

const CreerHotel = () => {
  return (
    <Container>
      <Card>
        <Header>
          <FontAwesomeIcon icon={faArrowLeft} />
          <Title>Créer un nouveau hôtel</Title>
        </Header>
        <Piod>
          <Row>
            <FrGr2oup>
              <StyledFrInput>
                <Label htmlFor="hotel-name">Nom de l'hôtel</Label>
                <Input id="hotel-name" type="text" placeholder="CAP Marniane" />
              </StyledFrInput>
              <StyledFormInput>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </StyledFormInput>
              <StyledFormInput>
                <Label htmlFor="price">Prix par nuit</Label>
                <Input id="price" type="number" placeholder="125.000 XOF" />
              </StyledFormInput>
            </FrGr2oup>
            <FrGr2oup>
              <StyledFrInput>
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" type="text" placeholder="Les îles de ..." />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input id="phone" type="text" placeholder="+221 ..." />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="currency">Devise</Label>
                <Select id="currency" name="currency">
                  <option value="XOF">F XOF</option>
                  <option value="Euro">Euro</option>
                  <option value="Dollar">$</option>
                </Select>
              </StyledFrInput>
            </FrGr2oup>
          </Row>
        </Piod>
        <Footer>
          <Label htmlFor="file">Ajouter une photo</Label>
          <Dropzone htmlFor="dropzone-file">
            <Image src={vector} alt="Vector"/>
            <SpanAjouterPhoto>Ajouter une photo</SpanAjouterPhoto>
            <Input id="dropzone-file" type="file" style={{display: "none"}} />
          </Dropzone>
        </Footer>
             <FlexEnd>
             <Link href="/dashboard">
              <StyledSubmitCreer type="submit">Se connecter</StyledSubmitCreer>
            </Link>
             </FlexEnd>
      </Card>
    </Container>
  );
};

export default CreerHotel;
