import styled from 'styled-components';
import { Field } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
`;

export const Label = styled.label`
  padding: 0 5px;
  opacity: 0.8;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

export const StyledField = styled(Field)`
  margin-left: 5px;
  padding: 8px;
  background: transparent;
  border: 2px solid #e5e0ff;
  border-radius: 5px;
  font-size: 16px;
  :focus {
    outline: 1px solid #7286d3;
  }
  /* :focus ~ label,
  :not(:placeholder-shown) ~ label {
    top: -8px;
    font-size: 12px;
    background-color: white;
    opacity: 1; 
  }*/
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  margin: 0 auto 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #8ea7e9;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #7286d3;
  }
`;

export const LabelContainer = styled.div`
  position: relative;
`;
