"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledFrmInput } from "../../styles/Connexion.Style";
import vector from "../assets/Vector.png"
import {
  Container,
  Card,
  Title,
  Header,
  Form,
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
  SpanAjouterPhoto,
} from "../../styles/Creer.Style";
import Link from "next/link";
import Image from "next/image";
import { ButtonModal } from "../../styles/Navbar2.Style";

const CreerHotel = ({ handleClose }) => {
  return (
    <Container>
      <Card>
        <Header>
          <ButtonModal onClick={handleClose}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </ButtonModal>
          <Title>Créer un nouveau hôtel</Title>
        </Header>
        <Form>
          <Row>
            <FrGr2oup>
              <StyledFrInput>
                <Label htmlFor="hotel-name">Nom de l'hôtel</Label>
                <Input id="hotel-name" type="text" placeholder="CAP Marniane" />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="price">Prix par nuit</Label>
                <Input id="price" type="number" placeholder="125.000 XOF" />
              </StyledFrInput>
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
        </Form>
        <Footer>
          <Label htmlFor="file">Ajouter une photo</Label>
          <Dropzone htmlFor="dropzone-file">
            <Image src={vector} alt="Vector" />
            <SpanAjouterPhoto>Ajouter une photo</SpanAjouterPhoto>
            <Input id="dropzone-file" type="file" style={{ display: "none" }} />
          </Dropzone>
        </Footer>
        <FlexEnd>
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            <StyledSubmitCreer type="submit">Se connecter</StyledSubmitCreer>
          </Link>
        </FlexEnd>
      </Card>
    </Container>
  );
};

export default CreerHotel;
