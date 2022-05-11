import styled from 'styled-components'

export const Container = styled.div`
  width: 30%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
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
  font-size: 35px;
  font-weight: 200;
  margin-bottom: 0;
  margin-top: 10px;
  }
`

export const ContentText = styled.div`
  overflow: scroll;
  padding: 10px;
  /* border: 1px solid #F0D882; */
  border-radius: 0 0 5px 5px ;
  height: 35vh;
  background-color: #E5EEF1;
`