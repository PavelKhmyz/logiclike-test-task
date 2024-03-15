import { CourseCard } from 'src/entities/course-card';
import { useAppSelector } from 'src/shared/lib';

export const Courses = () => {
  const { filteredCourses } = useAppSelector(state => state.courses);

  return (
    <div className='coursesWrapper'>
      { filteredCourses 
        && filteredCourses.map((
          course,
        ) => 
          <CourseCard 
            imgSource={ course.image } 
            title={ course.name }  
            bgColor={ course.bgColor }
            key={ course.id }
            className='courseCardContainer'
          />,
        )
      }
    </div>
  );
};
