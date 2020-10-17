import { useState, useCallback } from 'react';

const useSetData = initialState => {
  const [data, setDate] = useState(initialState);

  const setHandler = useCallback((value) => {
    setDate(value);
  }, [data]);

  const clearHandler = useCallback(() => {
    setDate(initialState);
  }, [data]);

  return [data, setHandler, clearHandler];
};

export default useSetData;
