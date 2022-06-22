import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1335px;
  width: 49%;
  margin: 20px auto 0;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 94%;
    margin: 0.2rem 0.8rem;
    height: 30vh;
  }
`

export const Content = styled.div`
  height: 100%;
  border-radius: 16px;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
  }
`
