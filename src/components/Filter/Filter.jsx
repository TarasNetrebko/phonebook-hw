import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/selector';
import { changeFilter } from 'redux/filter/actions';
import { FormLabel, FormControl } from 'react-bootstrap';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter)
  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value))
  } 
  return <FormLabel>
    Find contacts by name
    <FormControl type="text" value={filter} onChange={onChangeFilter} />
  </FormLabel>
}
