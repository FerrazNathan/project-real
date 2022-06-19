import styled from 'styled-components';

export const Video = styled.div`
  width: 1260px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }
`;
