/** @format */

import React from 'react';
import { useTodoAction } from '../common/Hooks/useTodoAction';
import TodoItem from './TodoItem';

const TodoList = () => {
	const {  todos } = useTodoAction();
	return (
		<div>
			<ul className='Todo__list'>
				{todos?.map((item) => (
					<TodoItem
						key={item.id}
						id={item.id}
						text={item.text}
						checked={item.checked}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
