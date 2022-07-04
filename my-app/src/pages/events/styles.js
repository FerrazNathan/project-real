import styled from 'styled-components'

export const Banner = styled.div`
  max-width: 1940px;
  width: 100%;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 65vh;
    margin-bottom: -3px;
    object-fit: cover;
    object-position: 100% 30%;
    @media (max-width: 768px) {
      object-fit: cover;
      object-position: 10% 5%;
      height: 40vh;
    }
  }
`

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
