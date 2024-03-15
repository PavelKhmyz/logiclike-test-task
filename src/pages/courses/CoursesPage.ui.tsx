import { useEffect } from 'react';
import { getCourses } from 'src/features/filter-courses';
import { useAppDispatch } from 'src/shared/lib';
import { Courses } from 'src/widgets/courses';
import { Filters } from 'src/widgets/filters';

export const CoursesPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  
  return (
    <>
      <Courses />
      <Filters />
    </>
  );
};
