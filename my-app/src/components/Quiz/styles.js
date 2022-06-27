import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1335px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
`

export const ContentQuestion = styled.div`
  & h2 {
    font-size: 44px;
    margin-bottom: 0;
  }
  & p {
    font-size: 20px;
  }
  & button {
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    background-color: #282c34;
    color: #fff9c7;
    text-transform: uppercase;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 90%;
      margin-left: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 1rem;
  }
`

export const Select = styled.select`
  background-color: #fff;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  margin-right: 20px;
  padding: 10px;
  outline: 0;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  &:focus {
    background-color: #e8f0fe;
  }
`

export const ButtonConclusion = styled.button`
  background-color: #143d59;
  color: #f0d882;
  border-radius: 5px;
  border: none;
  margin-right: 20px;
  padding: 10px;
  cursor: pointer;
  width: 30%;
  @media (max-width: 768px) {
    width: 80%;
  }
`
