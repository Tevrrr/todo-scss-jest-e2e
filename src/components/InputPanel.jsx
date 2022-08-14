/** @format */

import { useState } from 'react';
import { useTodoAction } from '../common/Hooks/useTodoAction';

const InputPanel = () => {
    const [text, setText] = useState('')
    const { addTodo } = useTodoAction();
    const onChangeInput = (e) => {
        setText(e.target.value);
    }
    const onClickAddButton = () => {
        addTodo(text);
        setText('')
    }
	return (
		<div>
			<div className='input_panel'>
				<input
					onChange={onChangeInput}
					value={text}
					className='input_panel__input'
					type='text'
				/>
				<button
					onClick={onClickAddButton}
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
