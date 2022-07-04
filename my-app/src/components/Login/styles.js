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
  color: linear-gradient(#cda83d 50%, #f0d882);
  font-family: 'Great Vibes', cursive;
  font-size: 80px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
  color: #f0d882;
  @media (max-width: 768px) {
    margin: 20px auto;
  }
`

export const Subtitle = styled.h2`
  /* color: #fff9c7; */
  color: #fce799;
  font-family: 'Great Vibes', cursive;
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
  &:focus {
    background-color: #e8f0fe;
  }
  @media (max-width: 768px) {
    width: 75%;
    margin-left: 3rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-left: 40px;
  }
`

export const Button = styled.button`
  background-color: #143d59;
  color: #fff9c7;
  border-radius: 5px;
  border: none;
  margin-right: 20px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: -8px;
    margin-bottom: 5px;
  }
`
