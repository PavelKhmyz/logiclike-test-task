import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICourse, logicLikeApi } from 'src/shared/api';

export interface ICoursesState {
  apiResponse?: ICourse[];
  filteredCourses?: ICourse[];
  loading: boolean;
  error?: string;  
}

export const coursesInitialState: ICoursesState = {
  loading: false,
};

export const getCourses = createAsyncThunk('/courses', async () => {
  return await logicLikeApi.getCourses();
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState: coursesInitialState,
  reducers: {
    filter (state, action) {
      if (!action.payload) {
        return {
          ...state,
          filteredCourses: state.apiResponse,
        };
      }

      return {
        ...state,
        filteredCourses: state.apiResponse?.filter(
          el => el.tags.includes(action.payload),
        ),
      };   
    },
  },
  extraReducers (builder) {
    builder
      .addCase(getCourses.pending, (state) => {
        return {
          ...state,
          loading: true,        
          error: undefined,
        };
      })

      .addCase(getCourses.fulfilled, (state, action) => {
        const tagsArr: string[] = [];        

        state.apiResponse?.forEach(el => el.tags.forEach(e => tagsArr.push(e)));

        return {
          ...state,
          loading: false,
          apiResponse: action.payload.data,
          filteredCourses: action.payload.data,
        };
      })

      .addCase(getCourses.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.error.message,
        };
      });
  },
});

export const { filter } = coursesSlice.actions;

export const coursesReducer = coursesSlice.reducer;
