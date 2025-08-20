import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#01a6b3',
    padding: 10,
    width: '80%',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  icon: {
    fontSize: 24,
    color: '#FFF'
  },
  text: {
    color: '#FFF',
    fontSize: 15,
    fontStyle: 'italic'
  }
});