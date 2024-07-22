import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: #282c34;
  position: relative;
`

export const ContentHeader = styled.div`
  max-width: 1335px;
  width: 100%;
  height: 15%;
  margin: 0 auto;
  background: #282c34;
  color: #fce799;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & ul {
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin: 0 auto;
    width: 100%;
    list-style: none;
    font-family: 'Nunito Sans', sans-serif;
    cursor: pointer;
    & :hover {
      color: #fff;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-right: 3rem;
    }
  }
`

export const Button = styled.button`
  border: none;
  background-color: #282c34;
  color: #f0d882;
  cursor: pointer;
  margin-left: 98%;
  margin-top: -20px;
  position: absolute;
  right: 25px;
  top: 85%;
  font-size: 18px;
  @media (max-width: 1366px) {
    margin-top: -4rem;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h1 {
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: #fce799;
    font-weight: 400;
    font-size: 44px;
    margin: 0 auto;
    line-height: 1;
  }

  & h2 {
    font-size: 32px;
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: #fce799;
    font-weight: normal;
    margin: 0 auto;
    line-height: 1;
  }
`

export const Icon = styled.img``
