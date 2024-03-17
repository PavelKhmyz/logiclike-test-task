import { memo } from 'react';
import { FiltersBlock } from 'src/features/filter-courses';

export const Filters = memo(() => {
  return (
    <div className='filtersBlock'>
      <FiltersBlock />
    </div>
  );
});
