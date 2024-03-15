import { filter } from './courses.slice';
import { useAppDispatch, useAppSelector } from 'src/shared/lib';
import { RadioButton } from 'src/shared/ui/radio-button';

export const FiltersBlock = () => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector(state => state.courses);

  const handleApplyFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filter(event.target.value));
  };

  return (
    <>
      <RadioButton 
        onChange={ handleApplyFilter } 
        className='filterButton'
        name='filtersBlock'
        defaultChecked
        text='Все темы'
        value=''            
      />
      {tags 
        && tags.map(
          tag => <RadioButton 
            onChange={ handleApplyFilter } 
            className='filterButton'
            name='filtersBlock'
            text={ tag }
            value={ tag }
            key={tag}            
          />,
        )
      }
    </>
  );
};