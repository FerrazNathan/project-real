import styled from 'styled-components'

export const ContentHeader = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 10%;
  margin: 0 auto;
  background-color: #282c34;
  color: #F0D882;
  padding: 5px;
  & ul {
    margin-top: 20px;
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
    font-size: 35px;
    color: #F0D882;
    font-weight: 400;
    margin-bottom: -15px;
    margin-top: 0;
    margin-bottom: -20px;
}
  & h2{
    font-size: 30px;
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: #F0D882;
    font-weight: 400;
    margin-bottom: -10px;
  }
`