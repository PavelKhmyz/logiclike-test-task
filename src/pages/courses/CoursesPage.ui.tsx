import { useEffect } from 'react';
import { getCourses } from 'src/features/filter-courses';
import { useAppDispatch, useAppSelector } from 'src/shared/lib';
import { ErrorNotification } from 'src/shared/ui/error-notification';
import { Courses } from 'src/widgets/courses';
import { Filters } from 'src/widgets/filters';
import { MoonLoader } from 'react-spinners';
import './CoursesPage.style.scss';

export const CoursesPage = () => {
  const dispatch = useAppDispatch();
  const { error, loading, apiResponse } = useAppSelector(state => state.courses);

  useEffect(() => {
    if(!apiResponse) {
      dispatch(getCourses());
    }
  }, [apiResponse, dispatch]);

  return (
    <div className='coursesPage'>
      { loading && <MoonLoader className='loader'/> }
      { error && <ErrorNotification message={error} className='coursesError'/> }
      { apiResponse && <>
        <Filters />
        <Courses /> 
      </>
      }
    </div>
  );
};
