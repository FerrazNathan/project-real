import styled from 'styled-components'

export const Container = styled.section`
  width: 65%;
  margin: 0 auto;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`

export const Header = styled.div`
  background-color: #282c34;
  text-align: center;
  font-family: 'Great Vibes', cursive;
  color: #F0D882;
  /* border: 1px solid #F0D882; */
  padding: 5px;
  border-radius: 5px 5px 0 0;
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
  /* border: 1px solid #F0D882; */
  border-radius: 0 0 5px 5px ;
  height: 35vh;
  background-color: #E5EEF1;
  margin-top: -10px;
`