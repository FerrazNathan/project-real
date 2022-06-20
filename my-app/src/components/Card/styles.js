import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1335px;
  width: 49%;
  margin: 20px auto 0;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  height: 100%;
  @media (min-width: 768px) {
  }
`

export const Header = styled.div`
  background-color: #282c34;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  color: #f0d882;
  padding: 5px;
  border-radius: 15px 15px 0 0;
  @media (min-width: 768px) {
    width: 100%;
  }
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
  height: 45vh;
  border-radius: 16px;
  width: 100%;
`
