import styled from 'styled-components'

export const ContentHeader = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 15%;
  margin: 0 auto;
  background-color: #282c34;
  color: #F0D882;
  padding: 20px;
  & ul {
    margin-top: 35px;
    display: flex;
    text-align: center;
    justify-content: space-around;
    list-style: none;
    cursor: pointer;
    & :hover{
    color: #FFF;
    }
  }
  
`
export const Text = styled.h1`
  & h1{
  text-align: center;
  font-family: 'Great Vibes', cursive;
  color: #F0D882;
  font-weight: 400;
  margin-bottom: -15px;
  margin-top: 0;
}
  & h2{
    font-size: 35px;
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: #F0D882;
    font-weight: 400;
  }
`