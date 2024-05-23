// "use client";
// import React, { useState } from "react";
// import { useRouter } from 'next/navigation';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import {
//   Container,
//   Card,
//   Title,
//   Header,
//   Form,
//   Row,
//   FrGr2oup,
//   Label,
//   Input,
//   Select,
//   Footer,
//   Dropzone,
//   StyledFrInput,
//   StyledSubmitCreer,
//   FlexEnd,
//   SpanAjouterPhoto,
// } from "../../styles/Creer.Style";
// import Link from "next/link";
// import Image from "next/image";
// import vector from "../assets/Vector.png";
// import { ButtonModal } from "../../styles/Navbar2.Style";

// const CreerHotel = ({ handleClose }) => {
//   const router = useRouter();


//   const [values, setValues] = useState({
//     hotelName: "",
//     price: "",
//     location: "",
//     devise: "",
//     email:"",
//     phone:""
//   })


//   const { hotelName, price, location, devise, email, phone } = values;


//   const handleChange = (e) => {
//       const { name, value, type, files } = e.target;
//       if (type === 'file') {
//           setValues({ ...values, [name]: files[0] });
//       } else {
//           setValues({ ...values, [name]: value });
//       }
//   }


//   const handleSubmit = async (e) => {
//       e.preventDefault();




//       try {
//           const res = await fetch("http://localhost:8080/api/hotels", {
//               method: "POST",
//               headers: {
//                   "Content-type": "application/json",
//               },
//               body: JSON.stringify({ hotelName, price, location, devise, email, phone})
//           })


//           if(res.ok){
//               router.push("/")
//           } else {
//               throw new Error('failed to create a Product')
//           }


//       } catch (error) {
//            console.log("Erro: ", error);
//       }
//   }

//   return (
//     <Container>
//       <Card>
//         <Header>
//           <ButtonModal onClick={handleClose}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </ButtonModal>
//           <Title>Créer un nouveau hôtel</Title>
//         </Header>
//         <Form onSubmit={handleSubmit}>
//           <Row>
//             <FrGr2oup>
//               <StyledFrInput>
//                 <Label htmlFor="hotelName">Nom de l'hôtel</Label>
//                 <Input
//                   type="text"
//                    name="hotelName"
//                     placeholder='Name of Hotel' 
//                     value={hotelName} 
//                     onChange={handleChange}
//                 />
//               </StyledFrInput>
//               <StyledFrInput>
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                    id="email"
//                   type="text"
//                   name="email"
//                    placeholder='Name of Hotel' 
//                    value={email} 
//                    onChange={handleChange}
//                 />
//               </StyledFrInput>
//               <StyledFrInput>
//                 <Label htmlFor="price">Prix par nuit</Label>
//                 <Input
//                   id="price"
//                   type="number"
//                   name="price"
//                    placeholder='Name of Hotel' 
//                    value={price} 
//                    onChange={handleChange}
//                 />
//               </StyledFrInput>
//             </FrGr2oup>
//             <FrGr2oup>
//               <StyledFrInput>
//                 <Label htmlFor="location">location</Label>
//                 <Input
//                   type="text"
//                    name="location"
//                     placeholder='location' 
//                     value={location} 
//                     onChange={handleChange}
//                 />
//               </StyledFrInput>
//               <StyledFrInput>
//                 <Label htmlFor="phone">Numéro de téléphone</Label>
//                 <Input
//                   id="phone"
//                   type="text"
//                   name="phone"
//                    placeholder='+221 ' 
//                    value={phone} 
//                    onChange={handleChange}
//                 />
//               </StyledFrInput>
//               <StyledFrInput>
//                 <Label htmlFor="devise">Devise</Label>
//                 <Select
//                   id="devise"
//                   type="text"
//                   name="devise"
//                    placeholder='Name of Hotel' 
//                    value={devise} 
//                    onChange={handleChange}
//                 >
//                   <option value="XOF">F XOF</option>
//                   <option value="Euro">Euro</option>
//                   <option value="Dollar">$</option>
//                 </Select>
//               </StyledFrInput>
//             </FrGr2oup>
//           </Row>
//           <Footer>
//             <Label htmlFor="photo">Ajouter une photo</Label>
//             <Dropzone>
//               <Image src={vector} alt="Vector" />
//               <SpanAjouterPhoto>Ajouter une photo</SpanAjouterPhoto>
//               <Input
//                 id="photo"
//                 name="photo"
//                 type="file"
//                 onChange={handleChange}
//                 style={{ display: "none" }}
//               />
//             </Dropzone>
//           </Footer>
//           <FlexEnd>
//             {/* <StyledSubmitCreer type="submit">Créer</StyledSubmitCreer> */}
//             <button type="submit">Enregistrer</button>
//           </FlexEnd>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default CreerHotel;


"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


export default function Page() {


    const router = useRouter();


    const [values, setValues] = useState({
      hotelName: "",
      price: "",
      location: "",
    })


    const { hotelName, price, location } = values;


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
            const res = await fetch("http://localhost:8080/api/hotels", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ hotelName, price, location})
            })


            if(res.ok){
                router.push("/")
            } else {
                throw new Error('failed to create a Product')
            }


        } catch (error) {
             console.log("Erro: ", error);
        }
    }


    return (
        <div>
            <div className="product">
                <div className="box">
                    <h3>Creer un hotel</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" name="hotelName" placeholder='Name of Hotel' value={hotelName} onChange={handleChange} />
                        </div>
                        <div className="input-box">
                            <input type="text" name="location" placeholder='location' value={location} onChange={handleChange} />
                        </div>
                        <div className="input-box">
                            <input type="text" name="price" placeholder='Price $' value={price} onChange={handleChange} />
                        </div>
                        <div className="input-box">
                            <input type="file" name="image" onChange={handleChange} />
                        </div>


                        <div className="button">
                            <button type="submit">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



