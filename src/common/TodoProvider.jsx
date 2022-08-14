/** @format */

import { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [counterID, setCounterID] = useState(0);
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		if (isLoad) saveDataToCache();
		if (todos.length === 0) setCounterID(0);
	}, [todos, isLoad]);
	useEffect(() => {
		loadDataFromCache();
	}, []);

	const addTodo = (text) => {
		const newTodo = { id: counterID + 1, checked: false, text };
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

	const loadDataFromCache = () => {
		const counterID = localStorage.getItem('counterID');
		const todos = localStorage.getItem('todos');
		if (counterID) {
			setCounterID(JSON.parse(counterID));
		}
		if (todos) {
			setTodos(JSON.parse(todos));
		}

		setIsLoad(true);
	};
	const saveDataToCache = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
		localStorage.setItem('counterID', counterID);
	};
	return (
		<TodoContext.Provider
			value={{ todos, addTodo, removeTodo, checkedTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
