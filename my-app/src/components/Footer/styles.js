import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background-color: #282c34;
  position: relative;
`

export const ContentFooter = styled.div`
  max-width: 1335px;
  width: 100%;
  height: 10%;
  margin: 0 auto;
  background-color: #282c34;
  color: #F0D882;
  padding: 5px 20px;
  margin-top: 2.9rem;
  & ul {
    margin-top: 20px;
    margin-right: 3%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    list-style: none;
    font-family: 'Nunito Sans', sans-serif;
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