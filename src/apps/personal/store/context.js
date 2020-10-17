import { createContext } from 'react';
import { createStoreHook, createDispatchHook, createSelectorHook } from 'react-redux';

export const PersonalContext = createContext(null);

export const usePersonalStore = createStoreHook(PersonalContext);
export const usePersonalDispatch = createDispatchHook(PersonalContext);
export const usePersonalSelector = createSelectorHook(PersonalContext);
