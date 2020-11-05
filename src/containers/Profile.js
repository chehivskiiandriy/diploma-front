import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../components/Button';
import ChangePasswordModal from '../components/ChangePasswordModal';
import { userSelector } from '../store/user/selectors';
import useIsOpen from '../hooks/useIsOpen';

const Profile = () => {
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  const user = useSelector(userSelector);

  return (
    <div className="profile">
      <div className="name">
        {`${user.lastName} ${user.firstName} ${user.middleName}`}
      </div>
      <a className="email" href={`mailto:${user.email}`}>{user.email}</a>
      {user.degree && <div className="indent-2xs-top">{`Наукова ступінь - ${user.degree.name}`}</div>}
      {user.group && <div className="indent-2xs-top">{`Група - ${user.group.name}`}</div>}
      {user.phone && <div className="indent-2xs-top">{user.phone}</div>}
      <Button
        mode="primary"
        label="Редагувати"
        className="indent-xs-top"
        onClick={openHandler}
      >
        Змінити пароль
      </Button>
      <ChangePasswordModal isOpen={isOpen} closeHandler={closeHandler} />
    </div>
  );
};

export default Profile;
