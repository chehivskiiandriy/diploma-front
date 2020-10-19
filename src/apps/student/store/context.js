import { createContext } from 'react';
import { createStoreHook, createDispatchHook, createSelectorHook } from 'react-redux';

export const StudentContext = createContext(null);

export const useStudentStore = createStoreHook(StudentContext);
export const useStudentDispatch = createDispatchHook(StudentContext);
export const useStudentSelector = createSelectorHook(StudentContext);
