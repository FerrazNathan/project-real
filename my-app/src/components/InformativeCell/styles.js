import styled from 'styled-components'

export const ContentMain = styled.section`
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
`

export const TextTitle = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 48px;
  font-weight: 400;
  color: #143D59;
  text-decoration: underline;
  margin-bottom: 0;
  @media (max-width: 768px) {
    margin: 0 3rem;
  }
`

export const ContainerText = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const TextBody = styled.p`
  color: #282c34;
  font-size: 18px;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-right: 1rem
  }
`

export const TextBodySpan = styled.span`
  margin-right: 10px;
  margin-top: 20px;
`