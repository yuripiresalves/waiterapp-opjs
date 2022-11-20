import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;

  @media (max-width: 570px) {
    height: 120px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1256px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }

  @media (max-width: 570px) {
    padding: 0 20px;

    .page-details {
      h1 {
        font-size: 18px;
      }
      h2 {
        font-size: 12px;
      }
    }

    img {
      width: 186.29px;
    }
  }
`;
