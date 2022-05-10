import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.div`
  width: 15vw;
  height: 7vh;
  text-align: center;
  background-color: #282c34;
  border-radius: 5px 5px 0 0;
  padding: 3px;
  color: #F0D882;
	font-family: 'Nunito Sans', sans-serif;
  & h1 {
    font-size: 18px;
    font-weight: 400;
  }
`

export const Content = styled.div`
  border-radius: 0 0 5px 5px;
  & video{
    width: 900px;
  }
`