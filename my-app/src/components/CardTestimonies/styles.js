import styled from 'styled-components'

export const Container = styled.section`
  width: 45%;
  margin: 20px auto 0;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  height: 56vh;
  background-color: red;
`

export const Header = styled.div`
  background-color: red;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  color: #F0D882;
  padding: 5px;
  border-radius: 15px 15px 0 0;
  & h1 {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 20px;
  padding-bottom: 10px;
  }
  & p {
    margin-top: 0;
    font-size: 24px;
  }
`

export const Content = styled.div`
  border-radius: 0 0 15px 15px ;
  height: 45vh;
  background-color: #E5EEF1;
  margin-top: -10px;
`