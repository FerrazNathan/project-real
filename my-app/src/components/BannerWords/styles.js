import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  background-color: #282c34;
  border: 1px solid #f0d882;
  margin: 40px 0 10px 0;
`;

export const Container = styled.div`
  background-color: #282c34;
  max-width: 1240px;
  width: 100%;
  margin: 40px auto 5px;
  border-radius: 5px;
  font-family: 'Great Vibes', cursive;
  color: #f0d882;
  & h1 {
    text-align: center;
    font-family: 'Great Vibes', cursive;
    color: #f0d882;
    font-weight: 200;
    font-size: 45px;
    @media (max-width: 768px) {
      margin: 0 2rem;
    }
  }
  & p {
    margin-top: 0;
    font-size: 28px;
    text-align: center;
    @media (max-width: 768px) {
      margin: 0 2rem;
    }
  }
`;
