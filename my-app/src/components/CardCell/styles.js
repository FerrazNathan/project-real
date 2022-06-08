import styled from 'styled-components'

export const Container = styled.section`
  width: 65%;
  margin: 20px auto 0;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
`

export const Header = styled.div`
  background-color: #282c34;
  text-align: center;
  font-family: 'Great Vibes', cursive;
  color: #F0D882;
  padding: 5px;
  border-radius: 15px 15px 0 0;
  & h1 {
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 20px;
  }
  & p {
    margin-top: 0;
    font-size: 24px;
  }
`

export const Content = styled.div`
  overflow: scroll;
  padding: 10px;
  border-radius: 0 0 15px 15px ;
  height: 45vh;
  background-color: #E5EEF1;
  margin-top: -10px;
`