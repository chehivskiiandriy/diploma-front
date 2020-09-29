import { updateUser } from './actions';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// todo test
export const getUser = () => async dispatch => {
  try {
    await delay(1000);

    dispatch(updateUser({ isLoaded: true, role: 'personal' }));
  } catch (e) {
    dispatch(updateUser({ isLoaded: true }));
  }
};

// todo test
export const checkToken = () => async dispatch => {
  const token = 'ff';

  if (token) {
    dispatch(getUser());
  } else {
    dispatch(updateUser({ isLoaded: true }));
  }
};
