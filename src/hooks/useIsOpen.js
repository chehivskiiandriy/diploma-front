import { useState, useCallback } from 'react';

const useIsOpen = initialState => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openHandler = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return [isOpen, openHandler, closeHandler];
};

export default useIsOpen;
