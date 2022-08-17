/** @format */

import { useState } from 'react';
import { useTodoAction } from '../common/Hooks/useTodoAction';

const InputPanel = () => {
	const [text, setText] = useState('');
	const { addTodo } = useTodoAction();
	const onChangeInput = (e) => {
		setText(e.target.value);
	};
	const onClickAddButton = () => {
		if (text.length > 0) {
			addTodo(text);
			setText('');
		}
	};
	return (
		<div>
			<div className='input_panel'>
				<input
					onChange={onChangeInput}
					value={text}
					data-testid='todo-input'
					className='input_panel__input'
					type='text'
				/>
				<button
					onClick={onClickAddButton}
					data-testid='todo-add-button'
					className='input_panel__button'>
					<span className='material-icons material-icons-round'>
						add
					</span>
				</button>
			</div>
		</div>
	);
};

export default InputPanel;
