import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Button from '../components/Button';
import ChangePasswordModal from '../components/ChangePasswordModal';
import { userSelector } from '../store/user/selectors';
import useIsOpen from '../hooks/useIsOpen';

const roles = {
  TEACHER: 'Викладач',
  PERSONAL: 'Навчальний персонал',
  STUDENT: 'Студент',
  TEACHER_HEAD: 'Завідувач кафедри',
};

const Profile = () => {
  const [isOpen, openHandler, closeHandler] = useIsOpen(false);

  const user = useSelector(userSelector);

  const role = useMemo(() => {
    if (user.isHead) {
      return roles.TEACHER_HEAD;
    }

    return roles[user.role];
  }, [user]);

  return (
    <div className="profile">
      <div className="name">
        {`${user.lastName} ${user.firstName} ${user.middleName}`}
      </div>
      <div className="role indent-2xs-top indent-2xs-bottom">
        {`${role}`}
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
