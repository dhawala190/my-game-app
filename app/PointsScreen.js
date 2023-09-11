// PointsScreen.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {APP_CONSTS} from './constants';

const PointsScreen = () => {
  const points = useSelector(state => state.points.points);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{APP_CONSTS.STRING_POINTS_SCREEN}</Text>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>
          {APP_CONSTS.STRING_CURRENT_POINTS}: {points}
        </Text>
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
});

export default PointsScreen;
