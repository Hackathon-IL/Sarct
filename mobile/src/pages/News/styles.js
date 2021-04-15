import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
  },
  border: {

  },
  picker: {
    marginTop: 25,
    marginLeft: 250,
    height: 40,
    width: 141,
  },
  tittle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {
    width: 3,
    height: 28,
    backgroundColor: '#FF6565',
    marginRight: 12,
    opacity: 0.4
  },
  tittleText: {
    color: '#322E2F',
    fontSize: 18,
    paddingBottom: 3,

  },
  hour: {
    color: '#707070',
    fontSize: 13,
    paddingBottom: 15,
    paddingLeft: 25,
  },
  new: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#707070',
    fontSize: 14,
    width: 182,
    height: 95,
  },
  image: {
    width: 132,
    height: 94,
    borderRadius: 10,
  },
  line: {
    marginTop: 20,
    width: '100%',
    height: 1,
    backgroundColor: '#F1F1F1',
  }
});

export default styles;