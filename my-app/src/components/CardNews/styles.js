import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px auto;
  display: flex;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  @media (min-width: 768px) {
    width: 95%;
    margin: 1.5rem auto;
  }
  @media (min-width: 1220px) {
    width: 100%;
    margin: 1.5rem auto;
  }
`

export const Header = styled.div`
  background-color: #282c34;
  text-align: center;
  font-family: 'Great Vibes', cursive;
  color: #f0d882;
  padding: 5px;
  border-radius: 15px 15px 0 0;
  & h1 {
    font-size: 35px;
    font-weight: 200;
    margin-bottom: 0;
    margin-top: 10px;
  }
`

export const ContentBody = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`

export const ContentImage = styled.div`
  & img {
    width: 850px;
    height: 400px;
    border-radius: 15px 0 0 15px;
    object-fit: cover;
    object-position: 100% 60%;
    @media (max-width: 768px) {
      width: 100%;
      height: 25vh;
      border-radius: 16px 16px 0 0;
      object-fit: cover;
      object-position: 50% 50%;
    }
    @media (min-width: 769px) {
      width: 60vw;
      object-fit: cover;
      object-position: 80% 0%;
    }
    @media (min-width: 1220px) {
      width: 850px;
      height: 400px;
      border-radius: 15px 0 0 15px;
      object-fit: cover;
      object-position: 100% 60%;
    }
  }
`

export const ContentText = styled.div`
  padding: 0 25px;
  height: 400px;
  font-size: 18px;
  line-height: 1.2;
  & h1 {
    text-align: center;
    font-family: 'Great Vibes', cursive;
    font-size: 40px;
    color: #143d59;
    text-decoration: underline;
    font-weight: 400;
    margin: 10px 0;
  }
`

export const ContentInformation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: -1rem;
  & p {
    margin-left: 10px;
  }
`
