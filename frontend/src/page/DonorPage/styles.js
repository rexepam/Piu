import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: '#ffffff',
  },
  backButtonContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  headerImage: {
    width: 280,
    height: 220,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerSubTitle: {
    paddingHorizontal: 30,
    fontSize: 15,
    color: '#7C7C7C',
  },
  locationContainer: {
    marginTop: 80,
    paddingHorizontal: 30,
  },
  locationItem: {
    height: 80,
    width: 350,
  },
  nextButtonContainer: {
    marginTop: 10,
    padding: 20,
  },
  nextButton: {
    height: 55,
    backgroundColor: '#F7941E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  nextButtonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;
