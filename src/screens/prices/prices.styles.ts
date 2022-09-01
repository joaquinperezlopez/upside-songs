import { StyleSheet } from 'react-native';
import CommonStyles from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceRowContainer: {
    height: 220,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#FFF',
    ...CommonStyles.shadow,
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceRowLabel: {
    textAlign: 'left',
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoBox: {
    ...CommonStyles.shadow,
    flex: 1,
    margin: 2,
    borderRadius: 8,
    aspectRatio: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 8,
  },
  bidColor: {
    backgroundColor: '#ad2424',
  },
  askColor: {
    backgroundColor: '#147519',
  },
  data: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
