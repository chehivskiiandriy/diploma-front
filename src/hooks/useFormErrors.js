import { useState, useEffect } from 'react';

const useFormErrors = errors => {
  const [isErrorsExist, setErrorsExist] = useState(false);

  useEffect(() => {
    const isErrors = Object.keys(errors).length > 0;
    setErrorsExist(isErrors);
  }, [Object.keys(errors).length]);

  return isErrorsExist;
};

export default useFormErrors;
