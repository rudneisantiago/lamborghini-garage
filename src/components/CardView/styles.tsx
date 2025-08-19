import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    resizeMode: 'contain'
  },
  imageLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain'
  }
});