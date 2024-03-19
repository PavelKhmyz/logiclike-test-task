import { CourseCard } from 'src/entities/course-card';
import { useAppSelector } from 'src/shared/lib';
import './Courses.style.scss';

export const Courses = () => {
  const { filteredCourses } = useAppSelector(state => state.courses);

  return (
    <div className='coursesWrapper'>
      { filteredCourses 
        && filteredCourses.map((
          course,
        ) => <CourseCard 
          id={course.id}
          imgSource={course.image} 
          title={course.name}  
          bgColor={course.bgColor}
          className='courseCardContainer'
          key={course.id}
        />,
        )
      }
    </div>
  );
};
