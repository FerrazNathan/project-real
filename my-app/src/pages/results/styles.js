import styled from 'styled-components';

export const Banner = styled.div`
  max-width: 1940px;
  width: 100%;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 65vh;
    margin-bottom: -3px;
    @media (max-width: 768px) {
      height: 40vh;
    }
  }
`;

export const ListQuestions = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Nunito Sans', sans-serif;
  @media (max-width: 768px) {
    margin-left: 0.3rem;
  }
`;

export const TextMain = styled.p`
  font-size: 1.2rem;
`;

export const SpanText = styled.span`
  text-transform: uppercase;
  font-weight: 500;
`;
