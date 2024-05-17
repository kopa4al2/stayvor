import { useEffect, useState } from 'react';

import { useDispatch } from "react-redux";
import { updateFilters } from "../../../store/features/shopSlice";
import { fetchAllItems } from "../../../store/thunk/thunk";
import {
    FilterItems,
    GreaterThanEqualsFilter,
    IncludesFilter,
    LessThanEqualsFilter
} from "../../../types/shop/Filter/Filter";
import './styles.css';


const defaultFilter: Record<string, FilterItems> = {};
defaultFilter['startDate'] = new GreaterThanEqualsFilter('', 'publishedOn', 'startDate')
defaultFilter['endDate'] = new LessThanEqualsFilter('', 'publishedOn', 'endDate')
defaultFilter['name'] = new IncludesFilter('', 'publisher', 'name')


function Filter() {
    const dispatch = useDispatch();
    const [state, setState] = useState<Record<string, FilterItems>>(defaultFilter);

    useEffect(() => {
        dispatch(updateFilters(Object.values(state)));
        // @ts-ignore
        dispatch(fetchAllItems());
    }, [state])

    const updateFilter = (inputName, newValue) => {
        const nextState = { ...state };
        const prevFilter = nextState[inputName] as FilterItems;
        prevFilter.value = newValue;

        setState(nextState);
    }

    return (
        <div className="filter-tab">
            <div className="form-group">
                <label htmlFor="startDate">Start date</label>
                <input
                    value={state['startDate'].value}
                    onChange={e => updateFilter('startDate', e.target.value)}
                    className='form-control' id='startDate' type="datetime-local"/>
            </div>
            <div className="form-group">
                <label htmlFor="endDate">End date</label>
                <input
                    value={state['endDate'].value}
                    onChange={e => updateFilter('endDate', e.target.value)}
                    className='form-control' id='endDate' type="datetime-local"/>
            </div>
            <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <input
                    value={state['name'].value}
                    onChange={e => updateFilter('name', e.target.value)}
                    className='form-control' id='publisher' type="text"/>
            </div>
        </div>
    );
}

export default Filter;