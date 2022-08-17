/** @format */

import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import TodoList from '../components/TodoList';
import InputPunel from '../components/InputPanel';
import TodoProvider from '../common/TodoProvider';
import { loadDataFromCache } from '../common/Cache/loadDataFromCache.js';
import { saveDataToCache } from '../common/Cache/saveDataToCache.js';
import { config } from 'react-transition-group';

config.disabled = true;
jest.mock('../common/Cache/loadDataFromCache.js');
jest.mock('../common/Cache/saveDataToCache.js');

describe('Input panel', () => {
	afterEach(() => {
		loadDataFromCache.mockImplementation((props) => {
			props([], 0, false);
		});
		saveDataToCache.mockImplementation(() => {});
	});

	test('Input text and add', () => {
		render(
			<TodoProvider>
				<InputPunel />
				<TodoList />
			</TodoProvider>
		);
		const input = screen.getByTestId('todo-input');
		const addButton = screen.getByTestId('todo-add-button');

		expect(screen.queryByTestId('todo-item')).toBeNull();

		fireEvent.input(input, {
			target: { value: '1' },
		});
		fireEvent.click(addButton);

		expect(screen.getAllByTestId('todo-item').length).toBe(1);
		expect(screen.getAllByTestId('todo-item-text')[0]).toHaveTextContent(
			'1'
		);
	});
	test('Add empty line', () => {
		render(
			<TodoProvider>
				<InputPunel />
				<TodoList />
			</TodoProvider>
		);
		const input = screen.getByTestId('todo-input');
		const addButton = screen.getByTestId('todo-add-button');

		expect(screen.queryByTestId('todo-item')).toBeNull();

		fireEvent.input(input, {
			target: { value: '' },
		});
        fireEvent.click(addButton);
        
		expect(screen.queryByTestId('todo-item')).toBeNull();
	});
});
