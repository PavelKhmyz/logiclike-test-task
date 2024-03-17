import { memo } from 'react';
import { Link } from 'react-router-dom';

export interface ICourseCard {
  id: string,
  imgSource: string;
  title: string;
  bgColor: string;
  className: string;
}

export const CourseCard = memo(({
  id,
  imgSource,
  title,
  bgColor,
  className,
}: ICourseCard): JSX.Element => {
  return (
    <Link to={'/' + id} state={bgColor} className={className} style={{ backgroundColor: bgColor }}>
      <img src={imgSource} alt={title}/>
      <p>{title}</p>
    </Link>
  );
});
