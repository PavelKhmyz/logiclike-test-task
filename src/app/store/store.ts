import { configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from 'src/features/filter-courses/courses.slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    courses: coursesReducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
