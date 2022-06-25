import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1335px;
  width: 100%;
  margin: 20px auto 0;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  height: 58vh;
  @media (max-width: 1366px) {
    width: 96%;
    margin-bottom: 4rem;
  }
`;

export const Header = styled.div`
  background-color: #282c34;
  text-align: center;
  font-family: 'Great Vibes', cursive;
  color: #f0d882;
  padding: 5px;
  border-radius: 16px 16px 0 0;
  & h1 {
    font-size: 50px;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 20px;
  }
  & p {
    margin-top: 0;
    font-size: 24px;
  }
`;

export const Content = styled.div`
  border-radius: 0 0 15px 15px;
  height: 45vh;
  /* background-color: #e5eef1; */
  margin-top: -10px;
`;
