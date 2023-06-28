import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { filterSet } from 'redux/filtersSlice';
import { getFilter } from 'redux/selector';

export function Filter() {
  const dispatch = useDispatch();
  const filterChange = useSelector(getFilter);

  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterSet(value));
  };

  return (
    <label className={css.labelFilter}>
      Find contact by name
      <input type="text" value={filterChange} onChange={handleChange} />
    </label>
  );
}
