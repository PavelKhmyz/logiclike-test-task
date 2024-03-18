import { memo, useCallback, useEffect, useState } from 'react';
import { filter } from './courses.slice';
import { useAppDispatch, useAppSelector } from 'src/shared/lib';
import { RadioButton } from 'src/shared/ui/radio-button';

export const FiltersBlock = memo(() => {
  const dispatch = useAppDispatch();
  const [tags, setTags] = useState<string[]>([]);
  const { apiResponse } = useAppSelector(state => state.courses);

  useEffect(() => {
    if (apiResponse){
      const tagsArr: string[] = [];
      apiResponse.forEach(el => el.tags.forEach(e => tagsArr.push(e)));
      setTags(tagsArr.filter((el, ind) => ind === tagsArr.indexOf(el)));
    }
  }, [apiResponse]);

  const handleApplyFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filter(event.target.value));
  }, [dispatch]);

  return (
    <>
      <RadioButton 
        onChange={handleApplyFilter} 
        className='filterButton'
        name='filtersBlock'
        defaultChecked
        text='Все темы'
        value=''
      />
      {tags && tags.map(tag => <RadioButton 
        onChange={handleApplyFilter} 
        className='filterButton'
        name='filtersBlock'
        text={tag}
        value={tag} 
        key={tag}        
      />,
      )}
    </>
  );
});
