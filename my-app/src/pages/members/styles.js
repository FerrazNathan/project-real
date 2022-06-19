import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div`
  max-width: 1940px;
  width: 100%;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 60vh;
    margin-bottom: -3px;
  }
`;

export const BoxText = styled.div`
  width: 100%;
  background-color: #282c34;
  margin-top: 40px;
`;
