"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
import vector from "../assets/Vector.png";
import { ButtonModal } from "../../styles/Navbar2.Style";

const CreerHotel = ({ handleClose }) => {
  const router = useRouter();


  const [values, setValues] = useState({
    hotelName: "",
    price: "",
    location: "",
    currency: "",
    email:"",
    phone:"",
    imageUrl: null
  })


  const { hotelName, price, location, currency, email, phone, imageUrl } = values;


  const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      if (type === 'file') {
          setValues({ ...values, [name]: files[0] });
      } else {
          setValues({ ...values, [name]: value });
      }
  }


  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const res = await fetch("https:localhost:8080/api/hotels", {
              method: "POST",
              headers: {
                  "Content-type": "application/json",
              },
              body: JSON.stringify({ hotelName, price, location, currency, email, phone, imageUrl })
          })


          if(res.ok){
              router.push("/hotel")
          } else {
              throw new Error('failed to create a Product')
          }


      } catch (error) {
           console.log("Erro: ", error);
      }
  }
  

  return (
    <Container>
      <Card>
        <Header>
          <ButtonModal onClick={handleClose}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </ButtonModal>
          <Title>Créer un nouveau hôtel</Title>
        </Header>
            <Form onSubmit={handleSubmit}>
            <Row>
                <FrGr2oup>
                <StyledFrInput>
                    <Label htmlFor="hotelName">Nom de l'hôtel</Label>
                    <Input
                    id="hotelName"
                    type="text"
                    name="hotelName"
                    placeholder="CAP Marniane"
                    value={hotelName}
                    onChange={handleChange}
                    />
                </StyledFrInput>
                <StyledFrInput>
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    />
                </StyledFrInput>
                <StyledFrInput>
                    <Label htmlFor="price">Prix par nuit</Label>
                    <Input
                    id="price"
                    type="text"
                    name="price"
                    placeholder="125.000 XOF"
                    value={price}
                    onChange={handleChange}
                    />
                </StyledFrInput>
                </FrGr2oup>
                <FrGr2oup>
                <StyledFrInput>
                    <Label htmlFor="location">Adresse</Label>
                    <Input
                    id="location"
                    type="text"
                    name="location"
                    placeholder="Les îles de ..."
                    value={location}
                    onChange={handleChange}
                    />
                </StyledFrInput>
                <StyledFrInput>
                    <Label htmlFor="phone">Numéro de téléphone</Label>
                    <Input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="+221 ..."
                    value={phone}
                    onChange={handleChange}
                    />
                </StyledFrInput>
                <StyledFrInput>
                    <Label htmlFor="currency">Devise</Label>
                    <Select
                    id="currency"
                    name="currency"
                    value={currency}
                    onChange={handleChange}
                    >
                    <option value="XOF">F XOF</option>
                    <option value="Euro">Euro</option>
                    <option value="Dollar">$</option>
                    </Select>
                </StyledFrInput>
                </FrGr2oup>
            </Row>
            <Footer>
                <Label htmlFor="file">Ajouter une photo</Label>
                <Dropzone htmlFor="dropzone-file">
                <Image src={vector} alt="Vector" />
                <SpanAjouterPhoto>Ajouter une photo</SpanAjouterPhoto>
                <Input value={imageUrl}id="dropzone-file" type="file" style={{ display: 'none' }} />
                </Dropzone>
            </Footer>
            <FlexEnd>
                <StyledSubmitCreer type="submit">Enregistrer</StyledSubmitCreer>
            </FlexEnd>
            </Form>
      </Card>
    </Container>
  );
};

export default CreerHotel;


