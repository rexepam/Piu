import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signInSignUpFormContainer: {
    padding: 15,
  },
  submitButton: {
    height: 50,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#20232a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  thirdParty: {
    height: 50,
    borderWidth: 1,
    marginVertical: 12,
    borderColor: '#20232a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdPartyText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
