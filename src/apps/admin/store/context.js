import { createContext } from 'react';
import { createStoreHook, createDispatchHook, createSelectorHook } from 'react-redux';

export const AdminContext = createContext(null);

export const useAdminStore = createStoreHook(AdminContext);
export const useAdminDispatch = createDispatchHook(AdminContext);
export const useAdminSelector = createSelectorHook(AdminContext);
