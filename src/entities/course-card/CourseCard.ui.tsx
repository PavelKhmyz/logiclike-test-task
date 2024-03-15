export interface ICourseCard {
  imgSource: string;
  title: string;
  bgColor: string;
  className: string;
}

export const CourseCard = ({ 
  imgSource,
  title,
  bgColor,
  className,
}: ICourseCard): JSX.Element => {
  return (
    <div className={className} style={{ backgroundColor: bgColor }}>
      <img src={imgSource} />
      <p>{title}</p>
    </div>
  );
};
