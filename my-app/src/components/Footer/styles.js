import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background-color: #282c34;
  position: relative;
  padding-bottom: 10px;
`

export const ContentFooter = styled.div`
  max-width: 1335px;
  width: 100%;
  height: 10%;
  margin: 0 auto;
  background-color: #282c34;
  color: #F0D882;
  padding: 5px;
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
export const Text = styled.div`
  & h1{
    text-align: center;
    font-family: 'Great Vibes', cursive;
    font-size: 35px;
    color: #F0D882;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: -5rem;
    margin-top: 2rem;
}
  & h2{
    font-size: 30px;
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: #F0D882;
    font-weight: 400;
  }
`

export const ContentContact = styled.div`
  margin-right: 2rem;
  margin-top: 2rem;
`