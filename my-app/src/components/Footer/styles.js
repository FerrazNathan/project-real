import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background: #282c34;
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`

export const ContentFooter = styled.div`
  max-width: 1380px;
  width: 100%;
  height: 10%;
  margin: 0 auto;
  background: #282c34;
  color: #f0d882;
  padding: 5px;
  // margin-top: 2.9rem;
  & ul {
    margin-top: 20px;
    margin-right: 3%;
    display: flex;
    text-align: center;
    justify-content: space-between;
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
      margin-bottom: 4rem;
    }
  }
`
export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  & h1 {
    text-align: center;
    font-family: 'Great Vibes', cursive;
    font-size: 35px;
    color: #fce799;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: -2rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  @media(max-width: 768px){
    margin-top: -4rem;
  }
`

export const ContentContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  color: #fce799;

  @media (max-width: 768px) {
    /* margin: 0 4rem 2rem 0; */
  }
`
