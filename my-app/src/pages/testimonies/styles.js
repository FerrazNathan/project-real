import styled from 'styled-components';

export const ContainerMain = styled.section`
  height: 100%;
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

export const Video = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
