"use client"
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #1e1e1e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  a {
    text-decoration: none !important;
    color: #ffcc00;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem

`;

const StyledIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;

const StyledText = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.125rem;
`;

const StyledFormContainer = styled.div`
  width: 100%;
  max-width: 24rem;
  margin-bottom: 0.5rem;

`;

const StyledForm = styled.form`
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
`;

const StyledInfo = styled.p`
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 0.75rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledTextInfo = styled.div`
  color: #a1a2a3;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #494c4f;
  border-radius: 1rem;
  padding: 0.5rem 0.75rem;
  color: #4b5563;
  margin-bottom: 1rem;
  background-color: transparent;
  &:focus {
    outline: none;
    border: 1px solid #494c4f;
    border-radius: 1rem;

  }
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem
`;

const StyledCheckboxInput = styled.input`
    margin-bottom: 1rem;
`;

const StyledCheckboxText = styled.p`
  color: #4b5563;
  font-size: 0.875rem;
`;

const StyledButton = styled.button`
  width: 100%;
  background: #45484B;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: #000;
  }
`;