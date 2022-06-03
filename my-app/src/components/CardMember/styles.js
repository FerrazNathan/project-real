import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: -20px auto 0;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Card = styled.div`
  margin: 10px;
  margin-top: 30px;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  padding: 10px;
  border-radius: 15px 15px 0 0;
  width: 100%;  
  & img{
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
  & h2{
    margin: 30px;
    width: 200px;
    font-family: 'Great Vibes', cursive;
    color: #fff9c7;
    font-weight: 500;
    font-size: 40px;
  }
`

export const BoxText = styled.div`
  & p {
    font-size: 20px;
    margin: 10px 15px;
    font-family: 'Nunito Sans', sans-serif;
    color: #282c34;
  }
`

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
`