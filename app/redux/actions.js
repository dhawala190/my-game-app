export const winAction = () => ({
  type: 'WIN',
  payload: 100,
});

export const loseAction = () => ({
  type: 'LOSE',
  payload: 50,
});

export const resetAction = () => ({
  type: 'RESET',
  payload: 0,
});
