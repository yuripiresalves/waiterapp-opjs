import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;
  margin: 0 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.5);
      }
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14;
      opacity: 0.8;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    list-style: none;
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        object-fit: cover;
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        strong {
          display: block;
          margin-left: 4px;
          margin-bottom: 4px;
        }
        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.3s;

    &:hover {
      background: #121214;
    }
  }

  .secondary {
    padding: 12px 24px;
    border-radius: 48px;
    color: #d73035;
    border: 0;
    background: transparent;
    font-weight: bold;
    margin-top: 12px;
    width: fit-content;
    margin: 12px auto 0;

    &::after {
      content: '';
      width: 0%;
      height: 2px;
      background-color: #d73035;
      display: block;
    }

    &:hover {
      &::after {
        animation: underlineHover 0.5s forwards;
      }
    }

    @keyframes underlineHover {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }
  }
`;
