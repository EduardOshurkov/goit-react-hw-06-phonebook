import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFilter } from "Redux/filterSlice";
import { getFilter } from "Redux/selectors";
import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
  
    const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value))
  }

    return (
        <div>
            <h2>Contacts</h2>
    <FilterLabel>
        Find contacts by name <FilterInput type='text' name="filter" id="filter" value={filter} onChange={onSetFilter}></FilterInput>
            </FilterLabel>
            </div>
            )
};

export default Filter;
