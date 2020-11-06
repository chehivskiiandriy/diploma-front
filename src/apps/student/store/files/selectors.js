import { createSelector } from 'reselect';

import { idX } from '../../../../redux/helpers';

const getCommonFiles = state => state.files.files;

export const commonFilesSelector = createSelector(getCommonFiles, idX);

const getMyFiles = state => state.files.myFiles;

export const myFilesSelector = createSelector(getMyFiles, idX);
