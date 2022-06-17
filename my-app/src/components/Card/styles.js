import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 15px;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  background-color: #282c34;
  border-radius: 15px;
  height: 45vh;
`

export const Header = styled.div`
  width: 100%;
  height: 7vh;
  text-align: center;
  background-color: #282c34;
  border-radius: 15px 15px 0 0;
  padding: 5px;
  color: #F0D882;
	font-family: 'Nunito Sans', sans-serif;
  & h1 {
    font-size: 18px;
    font-weight: 400;
  }
`

export const Content = styled.div`
  border-radius: 0 0 15px 15px;
  height: 340px;
`