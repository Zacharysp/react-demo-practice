import filtersReducer from '../../reducer/filters'
import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(filterReducerDefaultState);
})

test('should set sortBy to amount', () => {
    expect(filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'}).sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const state = filtersReducer({
        ...filterReducerDefaultState,
        sortBy: 'amount'
    }, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_TEXT_FILTER',
        text: 'test text'
    });
    expect(state.text).toBe('test text');
})

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_START_DATE',
        startDate: moment().startOf('month').add(1, 'day')
    });
    expect(state.startDate).toEqual(moment().startOf('month').add(1, 'day'));
})

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_END_DATE',
        endDate: moment().endOf('month').add(2, 'day')
    });
    expect(state.endDate).toEqual(moment().endOf('month').add(2, 'day'));
})