import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICourse, logicLikeApi } from 'src/shared/api';

export interface ICoursesState {
  apiResponse?: ICourse[];
  filteredCourses?: ICourse[];
  tags?: string[],
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
        state.filteredCourses = state.apiResponse;
      } else {
        state.filteredCourses = state.apiResponse?.filter(
          el => el.tags.includes(action.payload),
        );
      }      
    },
  },
  extraReducers (builder) {
    builder
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
        
        delete state.error;
      })

      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.apiResponse = action.payload.data;
        state.filteredCourses = action.payload.data;

        const tagsArr: string[] = [];

        state.apiResponse.forEach(el => el.tags.forEach(e => tagsArr.push(e)));

        state.tags = tagsArr.filter((el, ind) => ind === tagsArr.indexOf(el));
      })

      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filter } = coursesSlice.actions;

export const coursesReducer = coursesSlice.reducer;
