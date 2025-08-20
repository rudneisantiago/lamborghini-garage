import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles';

interface BuyButtonProps {
  onPress: (event: GestureResponderEvent) => void
  title: string
}

export function BuyButton({ onPress, title }: BuyButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name='shoppingcart' style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}