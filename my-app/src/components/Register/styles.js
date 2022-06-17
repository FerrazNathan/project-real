import styled from 'styled-components'


export const Register = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Nunito Sans', sans-serif;
`

export const Banner = styled.div`
  width: 100%;
`

export const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin: 10px 0;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  outline: 0;
  cursor: pointer;
  &:focus{
    background-color: #e8f0fe;
  }
`

export const InputMaskTel = styled.div`
  display: flex;
  flex-direction: column;
  & input{
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
    outline: 0;
    margin: 10px 0;
    &:focus{
    background-color: #e8f0fe;
  }
  }
`

export const Label = styled.label`
  text-transform: uppercase;
  margin: 5px 0 -5px 5px;
`

export const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin: 10px 0;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  outline: 0;
  background-color: #FFF;
  &:focus{
    background-color: #e8f0fe;
  }
`

export const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  background-color: #282c34;
  color: #fff9c7;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer
`