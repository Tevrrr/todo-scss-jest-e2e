/** @format */

import React from 'react';
import { useTodoAction } from '../common/Hooks/useTodoAction';

const TodoItem = ({ id, text, checked }) => {
	const { removeTodo, checkedTodo } = useTodoAction();
	const removeItem = () => {
		removeTodo(id);
	};
	const toggleChecked = () => {
		checkedTodo(id);
	};
	return (
		<li data-testid='todo-item' className='Todo__list_item'>
			{' '}
			<label data-testid='todo-label' className='Todo__label'>
				<input
					checked={checked}
					onChange={toggleChecked}
					type='checkbox'
					data-testid='todo-checkbox'
				/>
				<div className='Todo__checkbox'>
					<span className='material-icons material-icons-round'>
						done
					</span>
				</div>
				{text}
			</label>{' '}
			<button
				data-testid='todo-remove-button'
				onClick={removeItem}
				className='Todo__list_button'>
				<span className='material-icons material-icons-round'>
					delete
				</span>
			</button>
		</li>
	);
};

export default TodoItem;
