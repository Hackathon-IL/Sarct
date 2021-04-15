import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  text: {
    fontSize: 14,
    color: '#707070',
    lineHeight: 20,
  },
  picker: {
    marginTop: 25,
    height: 40,
    width: 141,
  },
  languages: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  languageCurrent: {
    marginTop: 25,
    color: '#000',
    fontSize: 16
  },
  input: {
    marginTop: 20,
    height: 400,
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 350,
    paddingLeft: 20,
  }

});

export default styles;