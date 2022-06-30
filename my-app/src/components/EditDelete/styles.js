import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: -20px auto 0;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 30%;
  margin-top: 30px;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  & img {
    width: 100%;
    height: 205px;
    border-radius: 16px;
    object-fit: cover;
    object-position: 100% 46%;
  }
  & h3 {
    margin-left: 1rem;
    margin-bottom: -1rem;
    margin-top: 0.5rem;
  }
  & p {
    margin-left: 1rem;
    margin-bottom: -1.5rem;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-top: 2rem;
  border-radius: 10px;
  margin-left: 20px;
  border: none;
  font-size: 0.7rem;
  background-color: #282c34;
  color: #fff9c7;
  text-transform: uppercase;
  font-weight: 600;
  height: 40px;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin: 0 10px;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  outline: 0;
  width: 70%;
  cursor: pointer;
  &:focus {
    background-color: #e8f0fe;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  margin: 5px 0 -5px 5px;
`;

export const InputMaskTel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 0.8rem;
  margin-top: 1rem;
  & input {
    padding: 10px;
    border-radius: 10px;
    border: none;
    width: 70%;
    height: 2.3rem;
    box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
    outline: 0;
    margin: 10px 0;
    &:focus {
      background-color: #e8f0fe;
    }
  }
  & button {
    margin-top: 0;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin: 10px 0;
  width: 70%;
  margin-left: 0.5rem;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  outline: 0;
  background-color: #fff;
  &:focus {
    background-color: #e8f0fe;
  }
`;

export const ButtonRemove = styled.button`
  padding: 5px 10px;
  margin-top: 2rem;
  border-radius: 16px;
  width: 90%;
  margin: 1rem auto;
  border: none;
  font-size: 0.7rem;
  background-color: #282c34;
  color: #fff9c7;
  text-transform: uppercase;
  font-weight: 600;
  height: 40px;
  cursor: pointer;
`;
