import styled from 'styled-components';

interface Props {
  hasOrders: boolean;
}

export const Board = styled.div<Props>`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: ${(props) => (props.hasOrders ? '100%' : 'fit-content')};
  overflow-y: scroll;

  > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    transition: background 0.3s;

    &:hover {
      background: rgba(204, 204, 204, 0.1);
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
