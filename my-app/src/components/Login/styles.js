import styled from 'styled-components'

export const Container = styled.section`
  margin: 50px auto;
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`

export const Title = styled.h1`
  color: linear-gradient(#CDA83D 50%, #F0D882);
  font-family: 'Great Vibes', cursive;
  color: #F0D882;
  font-size: 80px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
`

export const Subtitle = styled.h2`
  color: linear-gradient(#CDA83D, #F0D882);
  color: linear-gradient(#CDA83D 50%, #F0D882);
  font-family: 'Great Vibes', cursive;
  color: #F0D882;
  font-size: 60px;
  font-weight: 400;
  text-align: center;
`

export const Input = styled.input`
  width: 30%;
  height: 20px;
  border-radius: 18px;
  border: 1px solid #a49186;
  margin-left: 35%;
  margin-bottom: 30px;
  outline: 0;
  padding: 20px;
  cursor: pointer;
  &:focus{
    background-color: #e8f0fe;
  }
  @media(max-width: 480px){
    width: 60%;
    margin-left: 5rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  background-color: #143D59;
  color: #F0D882;
  border-radius: 5px;
  border: none;
  margin-right: 20px;
  padding: 10px;
  cursor: pointer;
`