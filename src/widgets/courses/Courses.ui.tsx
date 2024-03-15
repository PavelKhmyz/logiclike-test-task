import { CourseCard } from 'src/entities/course-card';
import { useAppSelector } from 'src/shared/lib';
import { LinkButton } from 'src/shared/ui/link-button';

export const Courses = () => {
  const { filteredCourses } = useAppSelector(state => state.courses);

  return (
    <div className='coursesWrapper'>
      { filteredCourses 
        && filteredCourses.map((
          course,
        ) => 
          <LinkButton id={course.id} bgColor={course.bgColor} key={course.id}>
            <CourseCard 
              imgSource={course.image} 
              title={course.name}  
              bgColor={course.bgColor}
              className='courseCardContainer'
            />
          </LinkButton>,
        )
      }
    </div>
  );
};
