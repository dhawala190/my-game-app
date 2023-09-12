import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {win, lose, reset} from './redux/slices/pointsSlice';
import {APP_CONSTS} from './constants';

const HomeScreen = ({navigation}) => {
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();

  const handleWin = () => {
    dispatch(win());
    navigation.navigate('Points');
  };

  const handleLose = () => {
    if (points === 0) {
      dispatch(reset());
      Toast.show(APP_CONSTS.STRING_NO_POINTS_ERROR_MESSAGE, Toast.LONG);
    } else {
      dispatch(lose());
      navigation.navigate('Points');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{APP_CONSTS.STRING_HOME_SCREEN}</Text>
      {/* <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>
          {APP_CONSTS.STRING_POINTS}: {points}
        </Text>
      </View> */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: APP_CONSTS.VALUE_COLOR_PRIMARY},
          ]}
          onPress={handleWin}>
          <Text style={styles.buttonText}>Win</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: APP_CONSTS.VALUE_COLOR_SECONDARY},
          ]}
          onPress={handleLose}>
          <Text style={styles.buttonText}>Lose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  pointsContainer: {
    backgroundColor: '#ffc570',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  pointsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
