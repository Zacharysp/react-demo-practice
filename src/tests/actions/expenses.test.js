import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        update: {
            note: 'new note'
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseDate = {
        description: 'test description',
        note: 'test note',
        amount: 109500,
        createdAt: 1000
    }
    const action = addExpense(expenseDate);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});
