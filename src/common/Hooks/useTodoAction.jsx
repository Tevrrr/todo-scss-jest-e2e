/** @format */

import { TodoContext } from '../TodoProvider';
import { useContext } from 'react';

export const useTodoAction = () => {
	const Todo = useContext(TodoContext);
	return Todo;
};
