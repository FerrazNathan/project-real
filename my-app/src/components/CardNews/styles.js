import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px auto;
  display: flex;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`

export const Header = styled.div`
  background-color: #282c34;
  text-align: center;
  font-family: 'Great Vibes', cursive;
  color: #F0D882;
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
  :nth-child(2n){
    flex-direction: row-reverse;
  }
`

export const ContentImage = styled.div`
  & img{
  width: 850px;
  height: 400px;
  border-radius: 15px 0 0 15px;
  }
`

export const ContentText = styled.div`
  padding: 0 25px;
  height: auto;
  font-size: 18px;
  line-height: 1.3;
  & h1{
    text-align: center;
    font-family: 'Great Vibes', cursive;
    font-size: 40px;
    color: #143D59;
    text-decoration: underline;
    font-weight: 400;
    margin: 10px 0;
  }
`

export const ContentInformation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & p{
    margin-left: 10px;
  }
`