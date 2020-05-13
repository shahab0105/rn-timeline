import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  jumbotron: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  dpView: {flex: 4 / 5, alignItems: 'flex-end', flexDirection: 'column'},
  dpDetailContainer: {
    backgroundColor: 'yellow',
    flex: 1 / 3,
    marginVertical: 10,
  },
  editButton: {height: 10, width: 10, backgroundColor: 'red'},

  row2: {
    backgroundColor: 'red',
    flex: 1 / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
