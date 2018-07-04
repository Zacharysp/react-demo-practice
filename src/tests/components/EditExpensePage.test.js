import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpenses, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpenses = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            startEditExpenses={startEditExpenses}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
        />
    );
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpenses onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpenses).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense onClick', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id);
}); 