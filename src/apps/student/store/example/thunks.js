import { updateUser } from './actions';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getUser = () => async dispatch => {
  try {
    await delay(3000);

    dispatch(updateUser({ isLoaded: true }));
  } catch (e) {
    dispatch(updateUser({ isLoaded: true }));
  }
};
