
// "use client"
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react'


// export default function Page() {


//     const router = useRouter();


   

//       const [values, setValues] = useState({
//         hotelName: "",
//         price: "",
//         location: "",
//         currency: "",
//         email:"",
//         phone:""
//       })


//     // const { hotelName, price, location } = values;
//     const { hotelName, price, location, currency, email, phone } = values;


//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         if (type === 'file') {
//             setValues({ ...values, [name]: files[0] });
//         } else {
//             setValues({ ...values, [name]: value });
//         }
//     }


//     const handleSubmit = async (e) => {
//         e.preventDefault();




//         try {
//             const res = await fetch("http://localhost:8080/api/hotels", {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify({ hotelName, price, location, currency, email, phone })
//             })


//             if(res.ok){
//                 router.push("/")
//             } else {
//                 throw new Error('failed to create a Product')
//             }


//         } catch (error) {
//              console.log("Erro: ", error);
//         }
//     }


//     return (
//         <div>
//             <div className="product">
//                 <div className="box">
//                     <h3>Creer un hotel</h3>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <div className="left">
//                                 <div className="input-box">
//                                     <input id='hotelName' type="text" name="hotelName" placeholder='Name of Hotel' value={hotelName} onChange={handleChange} />
//                                 </div>
//                                 <div className="input-box">
//                                     <input id='email' type="text" name="email" placeholder='email' value={email} onChange={handleChange} />
//                                 </div>
//                                 <div className="input-box">
//                                     <input id='price' type="text" name="price" placeholder='Price $' value={price} onChange={handleChange} />
//                                 </div>
//                             </div>
//                             <div className="right">
//                                 <div className="input-box">
//                                     <input id='location' type="text" name="location" placeholder='location' value={location} onChange={handleChange} />
//                                 </div>
//                                 <div className="input-box">
//                                     <input id='phone' type="text" name="phone" placeholder='phone' value={phone} onChange={handleChange} />
//                                 </div>
//                                 <div className="input-box">
//                                     <select id='currency' type="text" name="currency" placeholder='Devise' value={currency} onChange={handleChange}>
//                                         <option value="XOF">F XOF</option>
//                                         <option value="Euro">Euro</option>
//                                         <option value="Dollar">$</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>


//                         <div className="input-box">
//                             <input type="file" name="image" onChange={handleChange} />
//                         </div>


//                         <div className="button">
//                             <button href="/hotel" type="submit">Enregistrer</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }









































"use client"
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaImage } from "react-icons/fa";
import axios from 'axios';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const ContainerInput = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Label = styled.label`
  margin-bottom: 3px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  // line-height: 27.79px;
  // text-align: left;
`;

const DivImage = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const ImageWrapper = styled.label`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #dddddd;
`;

const ImageDefault = styled.span`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #dddddd;
`;

const ImageText = styled.p`
  margin-left: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #555555;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Image = styled.img`
 width: 100px;

`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  padding: 2rem;
  border-radius: 12px;
  flex-direction: column;

  justify-content: center;
`;

const ImageInput = styled.input`
  display: none;
`;

const Entete = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px dotted gray;
`;
const Bout = styled.h3`
    padding-top: 5px;
    cursor: pointer;
`

const Input = styled.input`
  width: 250px;
  border: 1px solid gray;
  padding: 8px;
  border-radius: 8px;
  background: transparent;
  outline: none;
  margin-top: 7px;
`;

const Select = styled.select`
  width: 260px;
  border: 1px solid gray;
  padding: 8px;
  border-radius: 8px;
  background: transparent;
  outline: none;
  margin-top: 7px;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const GroupLI = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Bouton = styled.button`
  padding: 10px 20px;
  background-color: #555555;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
`;
const InputPic = styled.input`
  display: none;
`
const GroupPic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid gray;
  margin-bottom: 7px;
  margin-top: 5px;
  width: 100%;
  height: 150px;
`

const IconePic = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  cursor: pointer;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAMAAACtIJvYAAAAZlBMVEX///8AAAB8fHwzMzOXl5ft7e37+/ttbW3f399HR0fz8/Otra1ZWVm+vr7p6em7u7tjY2MoKCjGxsbS0tI4ODienp5NTU1oaGgPDw9eXl6mpqa1tbWHh4c/Pz8uLi4dHR2Pj48XFxdcYBpTAAAEiUlEQVR4nO2b63qiMBBApQoCUlyxQEttXd//JbdTC0wuEyaENXz9cn7tUmmPRy4J4GYTCAQCgV9IWWfb9ZDVJUidT9G6OJ2/Sq1N6kur3Ox8O2jYbba+FTRsN74NtAQrPoPVdu+frWL1lPjnSbXyfYr5IljxCVZ8ghWfYMUnWPEJVnyCFZ9gxWdBq7hMy3hdVunfNnv5fGnav+lqrKqXaCSrVmGV/4lE9rl/q+oayVzPvq3Or4pUFN3ctJytUv0Fpmvp1epDKxVFReLRqiOkoujgzyrO0Lb09vSGtrHMYUd0tDoMEqcO/p9042bmEMvRqujXuvaH9PGa796b1RBmPJ5Xw7L527ubVdqv1I4GydBv/hnRzWroUqOFtdrvsVbv/UrvuoW+rJ51VgffVud+pQtaeOkXzj8Xulnl/UrbcRAa3/qF8wemSx0ZxrX2/aIPX0eG8dOKLneH8fJvtJst5WqFBlfbLi3Tbhwqm4ZYeWw+SbqOGYbPS4H+PUlXXJudycvVqiStyGFf3nz/vDEc+p1HfdRtxZpaYZh7ZPQ+6j5uvyhCwIV6+U+pby2ylrtV0mqk9tRRQZilkbWWmA/WkQz58SWZ8LoPotYic+eqEP5WQR4TlPksUWuh6wxV+/mz+ralT8qJOiHS11rsmkxadfWuPlSG/V0pRdZ64PWrXD91fNG8j8dZCaWe0L8z9Xj7MKscX0w6jONFba1HWQmlYDRxNNWytcrLWVNiYZu6T19xrU+plqXVpfgoyEOkQUouBeBajbgnWlml9+cMrK8gCNvUOPGo0NKTUMvGarjUYXmFMX/TlAKEWnjbsrBKx3dsVYsoBVC1+Fb4opBNLbIUQOyJbKsUv2OLWpq9D6PfE7lWpTgEiaKWp2UsBWhrMa2kUuxaOX4z79qX6GrxrJRSzFpCKeo4J9RK+VaaUqxajFKAWotjJZTCE8DWfCUhxkNU0xlBqcWwEkod0QXaiVrMUoB83Jq2EkodN+Lk4Q9di10KkGpNWkmlAFyroWrF/FKAUKsc5piEVSqXAhi1hFLdpJR0ThxmsnorTSlgspZlKQDXGtBaaUsBE7XiBv2cUwrABwiTFVEKMNYSpPg3TjS1NFZCqWfpV+Bab+K4e1YpQK2lWhlKAWStmaUApZZileIhiFwKIGrNLgXItWSriVKAtpZDKUCqJVlNlgLwjdTiXks4JMy5QyjWEq1K/M0AfSkA1yqglmMpQKglWLFKAVIt51KyFrYSSpmkpFopPs3Mv8GLtJAVLvVqlhJr4ectXG7RVzfF6mJRCsC1lpHSja8am1KUFu+EbGGF4UjptNxKma1euTdDZS3HUmYrXilVy7WUyYpdStZyLmWy4pcStdxL0VY32xvs/fMC9OlpASu7UsBxqY+PtLIuBSTPu6PLo2CTVu7PVi5vNavUf7fyLqWxOvmX+v3PbC9IsOITrPgEKz7Bik+w4hOs+Gis8tg3uXlG751gxWej+wqSb143zfSLHk4zPsK/It7RtzBWw/e3stqbbw2BW3s/pJ67ercW6s7xO4iBQCAQWCn/AIu+SA9boTXyAAAAAElFTkSuQmCC")
`


  const CreerHotel = ({ isOpen, onClose }) => {
      const [formData, setFormData] = useState({
        nom: "",
        adresse: "",
        email: "",
        telephone: "",
        prix: "",
        devise: "",
        image: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    
    
      const [selectedImage, setSelectedImage] = useState(null);
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        setFormData({
          ...formData,
          image: file,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (let key in formData) {
          formDataToSend.append(key, formData[key]);
        }
    
        try {
          const response = await axios.post(
            "http://localhost:3000/api/hotels",
            formDataToSend
          );
          console.log(response.data);
          alert("Hotel ajouté avec succès");
          setSelectedImage(null)
          onClose()
        } catch (error) {
          console.error("Erreur lors de l'envoi des données :", error);
        }
      };

  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };


  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Entete>
          <Bout onClick={onClose}>
            <FaArrowLeft />
            </Bout>
          <h2>CREER UN NOUVEAU HOTEL</h2>
        </Entete>
        <form className='bg-dark' onSubmit={handleSubmit}>
        <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">Nom de lhôtel:</Label>
          <Input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Adresse:</Label>
          <Input
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            placeholder="Adresse de l'hôtel"
            required
          />
        </InputWrapper>
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Telephone:</Label>
          <Input
            type="number"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone de l'hôtel"
            required
          />
        </InputWrapper>
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">prix par nuit:</Label>
          <Input
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleChange}
            placeholder="Prix de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Devise:</Label>
          <Select
            name="devise"
            value={formData.devise}
            onChange={handleChange}
            required
          >
            <option value="XOF">F CFA</option>
            <option value="EUR">Euro</option>
            <option value="USD">Dollar</option>
          </Select>
        </InputWrapper>
      </ContainerInput>
      <DivImage>
        <Label htmlFor="nom">Ajouter une photo:</Label>
        <FileInputContainer>
          <ImageWrapper>
            
            <ImageText>
              {selectedImage
                ? <Image src={URL.createObjectURL(selectedImage)}  alt="selected-img"  />
                // selectedImage.name
                : <ImageDefault>
                <FaImage size={40} />
                <ImageText>Ajouter une photo</ImageText>
                </ImageDefault>
                 }
            </ImageText>
            <ImageInput
              type="file"
              name="image"
              onChange={handleImageChange}
              required
            />
          </ImageWrapper>
        </FileInputContainer>
      </DivImage>
      <ButtonContainer>
        <SubmitButton type="submit">Ajouter l hôtel</SubmitButton>
      </ButtonContainer>
        </form>
      </ModalContent>
    </ModalBackground>
  );
};


export default CreerHotel;