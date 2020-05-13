import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  postContainer: {backgroundColor: 'green', flex: 1 / 4, marginBottom: 10},
  row1: {
    backgroundColor: 'pink',
    flex: 1 / 3,
    marginVertical: 5,
    flexDirection: 'row',
  },
  row2: {
    backgroundColor: 'pink',
    flex: 2 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  dpPreview: {
    backgroundColor: 'yellow',
    flex: 0.5 / 5,
    padding: 2,
    alignItems: 'center',
  },
  profileTitle: {
    backgroundColor: 'white',
    flex: 2 / 5,
    padding: 2,
    alignItems: 'center',
  },

  dpPreviewImg: {
    height: '100%',
    aspectRatio: 1,
  },
});
export default styles;
