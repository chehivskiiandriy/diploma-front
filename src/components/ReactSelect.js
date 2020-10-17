import React from 'react';
import Select from 'react-select';

const ReactSelect = props => (
  <Select
    {...props}
    theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#ff8c00',
        primary25: '#ffd486',
        primary50: '#ffd486',
      },
    })}
  />
);

export default ReactSelect;
