import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1335px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & button{
    background-color: #143D59;
    color: #F0D882;
    border-radius: 5px;
    border: none;
    margin-right: 20px;
    padding: 10px;
    cursor: pointer;
    margin-left: 2%;
  }
`

export const ContentQuestion = styled.div`
  & h2{
    font-size: 24px;
  }
  & button{
    background-color: #143D59;
    color: #F0D882;
    border-radius: 5px;
    border: none;
    margin-right: 20px;
    padding: 10px;
    cursor: pointer;
    margin-left: 2%;
  }
`

export const Select = styled.select`
  background-color: #e8f0fe;
  /* color: #F0D882; */
  border-radius: 5px;
  border: none;
  margin-right: 20px;
  padding: 10px;
  outline: 0;
  width: 50%;
  cursor: pointer;
  &:focus{
    background-color: #e8f0fe;
  }
`