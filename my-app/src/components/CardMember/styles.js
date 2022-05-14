import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: -20px auto 0;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Card = styled.div`
  margin: 10px;
  margin-top: 30px;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  padding: 10px;
  border-radius: 15px 15px 0 0;
  width: 100%;  
  & img{
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
  & h2{
    margin: 30px;
    width: 200px;
    font-family: 'Great Vibes', cursive;
    color: #F0D882;
    font-weight: 400;
    font-size: 40px;
  }
`

export const BoxText = styled.div`
  & p {
    font-size: 20px;
    text-align: start;
    margin: 10px 15px;
    font-family: 'Nunito Sans', sans-serif;
    color: #282c34;
  }
`