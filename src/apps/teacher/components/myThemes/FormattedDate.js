import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import toLocaleTime from '../../../../utils/toLocaleTime';

const FormattedDate = ({ children }) => {
  const formattedDate = useMemo(() => toLocaleTime(children), [children]);

  return (
    <div>
      {formattedDate}
    </div>
  );
};

FormattedDate.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormattedDate;
