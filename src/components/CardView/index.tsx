import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import Logo from '../../../assets/logo.png'
import { Divider } from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';

export function CardView() {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.imageLogo} />
    </View>
  )

  const renderCarDetails = () => (
    <View style={styles.carDetailsContainer}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>Modelo do carro</Text>
    </View>
  )

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{ uri: `${CAR_ASSETS_BASE_URL}1.png` }}
    />
  )

  return (
    <View style={styles.container}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
    </View>
  );
}