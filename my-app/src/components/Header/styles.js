import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #282c34;
  position: relative;
`;

export const ContentHeader = styled.div`
  max-width: 1335px;
  width: 100%;
  height: 15%;
  margin: 0 auto;
  background-color: #282c34;
  color: #fce799;
  padding: 15px 0;
  & ul {
    margin-top: 35px;
    margin-right: 3%;
    margin-bottom: -10px;
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
    }
  }
`;

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
`;

export const Text = styled.div`
  & h1 {
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: #fce799;
    font-weight: 400;
    margin-bottom: -25px;
    margin-top: 0;
    font-size: 60px;
  }
  & h2 {
    font-size: 35px;
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: #fce799;
    font-weight: 300;
    margin-bottom: -15px;
  }
`;

export const Icon = styled.img``;
