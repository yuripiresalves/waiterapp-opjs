import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '6373dad85205b216511a098l',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668535547406-quatro-queijos.png',
          price: 40,
        },
        quantity: 2,
        _id: '6373dad85205b216511a0990',
      },
      {
        product: {
          name: 'Coca-cola',
          imagePath: '1668536114406-coca-cola.png',
          price: 7,
        },
        quantity: 1,
        _id: '6373dad85205b216511a0991',
      },
    ],
  },
  {
    _id: '6373dad85205b216511a098f',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668535547406-quatro-queijos.png',
          price: 40,
        },
        quantity: 2,
        _id: '6373dad85205b216511a0990',
      },
      {
        product: {
          name: 'Coca-cola',
          imagePath: '1668536114406-coca-cola.png',
          price: 7,
        },
        quantity: 3,
        _id: '6373dad85205b216511a0991',
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕒" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
