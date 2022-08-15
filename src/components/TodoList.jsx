/** @format */

import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTodoAction}  from '../common/Hooks/useTodoAction';
import TodoItem from './TodoItem';

const TodoList = () => {
	const { todos } = useTodoAction();
	return (
		<ul data-testid='todo-list' className='Todo__list'>
			<TransitionGroup>
				{todos?.map((item) => (
					<CSSTransition timeout={500} classNames='item'>
						<TodoItem
							key={item.id}
							id={item.id}
							text={item.text}
							checked={item.checked}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);
};

export default TodoList;
