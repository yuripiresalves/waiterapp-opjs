import { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="600" color="#fff">
          {children}
        </Text>
      )}

      {loading && <ActivityIndicator color="#fff" />}
    </Container>
  );
}
