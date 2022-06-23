import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  max-width: 1290px;
  height: auto;
  margin: -10px auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
    height: 50%;
  }
`