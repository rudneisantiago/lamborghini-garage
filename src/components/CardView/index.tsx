import { View, Text, Image, Button } from 'react-native';
import { useEffect, useState } from 'react';

import Logo from '../../../assets/logo.png'
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { Divider } from '../Divider';
import { BuyButton } from '../BuyButton';
import { styles } from './styles';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';
import { CarModel } from './props';

export function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null)

  useEffect(() => {
    (async () => {
      await loadCarData(3, setCarData)
    })()
  }, [])

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.imageLogo} />
    </View>
  )

  const renderCarDetails = () => (
    <View style={styles.carDetailsContainer}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  )

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }}
    />
  )

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title='<' color={'#01a6b3'} onPress={() => handlePreviousItem(carData, setCarData)} />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button title='>' color={'#01a6b3'} onPress={() => handleNextItem(carData, setCarData)} />
    </View>
  )

  return (
    <View style={styles.container}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton title='Buy' onPress={() => console.log('apertou')} />
      {renderPriceControls()}
    </View>
  );
}