import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    resizeMode: 'contain'
  },
  carDetailsContainer: {
    alignItems: 'center'
  },
  image: {
    flex: 1,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  imageLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain'
  },
  carBrand: {
    color: '#FFF',
    fontWeight: 400,
    fontSize: 18,
    fontStyle: 'italic'
  },
  carName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center'
  },
  priceLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  priceLabel: {
    color: '#FFF',
    fontSize: 22
  }
});