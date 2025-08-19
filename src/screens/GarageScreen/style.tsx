import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1e1e20',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraBox: {
    width: 350,
    height: '80%',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10
  },
  triangleCorner: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: '#FFF',
    borderRightWidth: 20,
    borderRightColor: 'transparent'
  },
  topRight: {
    position: 'absolute',
    right: 0,
    transform: [{ rotate: '90deg' }]
  },
  bottomRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    transform: [{ rotate: '180deg' }]
  },
  bottomLeft: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    transform: [{ rotate: '-90deg' }]
  }
})