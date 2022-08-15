/** @format */

import { createContext, useState, useEffect } from 'react';
import { loadDataFromCache } from './Cache/loadDataFromCache.js';
import { saveDataToCache } from './Cache/saveDataToCache.js';

export const TodoContext = createContext();

const TodoProvider = ({ children, initialValue = [] }) => {
	const [todos, setTodos] = useState(initialValue);
	const [counterID, setCounterID] = useState(0);
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		if (isLoad) saveDataToCache(todos, counterID);
		if (todos.length === 0) setCounterID(0);
	}, [todos, isLoad]);
	useEffect(() => {
        loadDataFromCache((todos, counterID, isLoad) => {
            setTodos(todos);
            setCounterID(counterID);
            setIsLoad(isLoad);
        });
	}, []);

	const addTodo = (text) => {
		const newTodo = { id: counterID, checked: false, text };
		setCounterID(counterID + 1);
		setTodos([...todos, newTodo]);
	};
	const removeTodo = (todoID) => {
		setTodos(todos.filter((item) => item.id !== todoID));
	};
	const checkedTodo = (todoID) => {
		setTodos(
			todos.map((item) => {
				if (item.id === todoID) {
					return { ...item, checked: !item.checked };
				} else {
					return item;
				}
			})
		);
	};

	return (
		<TodoContext.Provider
			value={{ todos, addTodo, removeTodo, checkedTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
