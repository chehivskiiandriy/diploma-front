import { createContext } from 'react';
import { createStoreHook, createDispatchHook, createSelectorHook } from 'react-redux';

export const TeacherContext = createContext(null);

export const useTeacherStore = createStoreHook(TeacherContext);
export const useTeacherDispatch = createDispatchHook(TeacherContext);
export const useTeacherSelector = createSelectorHook(TeacherContext);
