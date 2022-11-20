import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1256px;
  padding: 0 40px;
  margin: 40px auto;
  display: flex;
  gap: 32px;
  height: calc(100vh - 80px);

  @media (max-width: 991px) {
    flex-direction: column;
  }

  @media (max-width: 570px) {
    padding: 0 20px;
  }
`;
