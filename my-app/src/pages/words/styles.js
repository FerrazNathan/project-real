import styled from 'styled-components';

export const Banner = styled.div`
  max-width: 1940px;
  width: 100%;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 60vh;
    margin-bottom: -3px;
    object-fit: cover;
    object-position: 0% 25%;
  }
`;

export const Video = styled.div`
  width: 1260px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
