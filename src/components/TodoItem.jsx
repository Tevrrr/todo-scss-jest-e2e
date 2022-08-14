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
		<div>
			<li className='Todo__list_item'>
				{' '}
				<label className='Todo__label'>
					<input
						checked={checked}
						onChange={toggleChecked}
						type='checkbox'
					/>
					<div className='Todo__checkbox'>
						<span className='material-icons material-icons-round'>
							done
						</span>
					</div>
					{text}
				</label>{' '}
				<button onClick={removeItem} className='Todo__list_button'>
					<span className='material-icons material-icons-round'>
						delete
					</span>
				</button>
			</li>
		</div>
	);
};

export default TodoItem;
