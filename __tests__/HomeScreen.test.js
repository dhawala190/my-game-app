// __tests__/HomeScreen.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../app/HomeScreen';
import {win, lose} from '../app/redux/slices/pointsSlice';

const mockStore = configureMockStore([]);

// Mock the navigation object
const mockNavigation = {
  navigate: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
};

describe('HomeScreen Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      points: {
        points: 100,
      },
    });

    component = (
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen navigation={mockNavigation} />
        </NavigationContainer>
      </Provider>
    );
  });

  it('should render correctly', () => {
    const {getByText} = render(component);
    expect(getByText('Home Screen')).toBeTruthy();
    expect(getByText('Points: 100')).toBeTruthy();
  });

  it('should handle "Win" button click and dispatch the "win" action', () => {
    const {getByText} = render(component);
    const winButton = getByText('Win');

    fireEvent.press(winButton);
    const actions = store.getActions();
    expect(actions).toEqual([win()]);
    expect(mockNavigation.push).toHaveBeenCalledWith('Home');
  });

  it('should handle "Lose" button click and dispatch the "lose" action', () => {
    const {getByText} = render(component);
    const loseButton = getByText('Lose');

    fireEvent.press(loseButton);

    const actions = store.getActions();
    expect(actions).toEqual([lose()]);
    expect(mockNavigation.pop).toHaveBeenCalledWith();
  });
});
