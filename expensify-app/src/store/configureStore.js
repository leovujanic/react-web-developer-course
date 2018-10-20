import {combineReducers, createStore} from "redux";
import expensesReducer from './../reducers/expenses'
import filtersReducer from './../reducers/filters'


const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer,
	})
);