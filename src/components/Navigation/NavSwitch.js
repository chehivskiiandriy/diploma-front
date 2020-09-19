import { Children, isValidElement } from 'react';
import { useSelector } from 'react-redux';

import { userRoleSelector } from '../../store/user/selectors';

const NavSwitch = ({ children }) => {
  const type = useSelector(userRoleSelector);

  let element;

  Children.forEach(children, child => {
    if (!element && isValidElement(child) && child.props.type === type) {
      element = child;
    }
  });

  return element || null;
};

export default NavSwitch;
