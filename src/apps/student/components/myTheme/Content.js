import React, { Fragment } from 'react';
import { GET_THEME_INFO_LOADING } from '../../../../store/loading/constants';
import { isTaskLoading } from '../../../../store/loading/selectors';

import { useStudentSelector } from '../../store/context';
import { themeInfoSelector } from '../../store/themeInfo/selectors';
import loaderSrc from '../../../../assets/icons/loader.svg';
import Icon from '../../../../components/Icon';

const Content = () => {
  const themeInfo = useStudentSelector(themeInfoSelector);
  const loading = useStudentSelector(state => isTaskLoading(state, GET_THEME_INFO_LOADING));

  if (loading) {
    return <div className="loader"><Icon id={loaderSrc.id} size="30px" /></div>;
  }

  return (
    <Fragment>
      <ul className="themeInfo">
        <li>
          <b>Тема: </b>
          <span>{themeInfo.name}</span>
        </li>
        <li>
          <b>Дипломний керівник: </b>
          {
            themeInfo.teacher && (
              <span>
                {themeInfo.teacher.lastName}
                {' '}
                {themeInfo.teacher.firstName}
                {' '}
                {themeInfo.teacher.middleName}
                {' '}
                (
                {themeInfo.teacher.email}
                )
              </span>
            )
          }
        </li>
        <li>
          <b>Напрям лабораторії: </b>
          <span>{themeInfo.laboratoryDirection && themeInfo.laboratoryDirection.name}</span>
        </li>
      </ul>
    </Fragment>
  );
};

export default Content;
