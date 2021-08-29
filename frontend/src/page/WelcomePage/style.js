import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    padding: 0,
    justifyContent: 'center',
    backgroundColor: '#F7941E',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 200,
    height: 100,
  },
  logoText: {
    fontSize: 60,
    color: '#ffffff',
  },
  roleContainer: {
    padding: 10,
    marginTop: 40,
  },
  roleText: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 10,
  },
  roleButton: {
    height: 55,
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  roleButtonText: {
    fontSize: 20,
    color: '#F7941E',
    fontWeight: 'bold',
  },
});

export default styles;
