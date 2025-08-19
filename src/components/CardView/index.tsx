import { View, Text, Button, Image } from 'react-native';

import { styles } from './styles';
import Logo from '../../../assets/logo.png'
import { Divider } from '../Divider';

export function CardView() {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.imageLogo} />
    </View>
  )

  return (
    <View style={styles.container}>
      {renderLogoBox()}
      <Divider />
    </View>
  );
}