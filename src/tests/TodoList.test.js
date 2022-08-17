/** @format */

import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import TodoList from '../components/TodoList';
import TodoProvider from '../common/TodoProvider';
import { loadDataFromCache } from '../common/Cache/loadDataFromCache.js';
import { saveDataToCache } from '../common/Cache/saveDataToCache.js';
import { config } from 'react-transition-group';

config.disabled = true;
jest.mock('../common/Cache/loadDataFromCache.js');
jest.mock('../common/Cache/saveDataToCache.js');

describe('Todo list test', () => {
	afterEach(() => {
		loadDataFromCache.mockImplementation((props) => {
			props([], 0, false);
		});
		saveDataToCache.mockImplementation(() => {});
	});
	test('List length', () => {
		render(
			<TodoProvider
				initialValue={[
					{ id: 1, checked: false, text: '1' },
					{ id: 2, checked: false, text: '2' },
					{ id: 3, checked: false, text: '3' },
				]}>
				<TodoList />
			</TodoProvider>
		);
		expect(screen.getAllByTestId('todo-item').length).toBe(3);
	});

	test('List length 0', () => {
		render(
			<TodoProvider initialValue={[]}>
				<TodoList />
			</TodoProvider>
		);

		expect(screen.queryByTestId('todo-item')).toBeNull();
	});

	test('Local storage data', () => {
		loadDataFromCache.mockImplementation((props) => {
			props(
				[
					{ id: 0, checked: false, text: '1' },
					{ id: 1, checked: false, text: '2' },
					{ id: 2, checked: false, text: '3' },
				],
				3,
				false
			);
		});
		render(
			<TodoProvider>
				<TodoList />
			</TodoProvider>
		);

		expect(screen.getAllByTestId('todo-item').length).toBe(3);
	});

	test('List item checked', () => {
		render(
			<TodoProvider
				initialValue={[
					{ id: 1, checked: false, text: '1' },
					{ id: 2, checked: false, text: '2' },
					{ id: 3, checked: false, text: '3' },
				]}>
				<TodoList />
			</TodoProvider>
		);
        expect(screen.getAllByTestId('todo-checkbox')[1]).not.toBeChecked();
        
        fireEvent.click(screen.getAllByTestId('todo-label')[1]);
        
		expect(screen.getAllByTestId('todo-checkbox')[1]).toBeChecked();
	});
	test('List item remoute', () => {
		render(
			<TodoProvider
				initialValue={[
					{ id: 1, checked: false, text: '1' },
					{ id: 2, checked: false, text: '2' },
					{ id: 3, checked: false, text: '3' },
				]}>
				<TodoList />
			</TodoProvider>
		);
        expect(screen.getAllByTestId('todo-item').length).toBe(3);
        expect(screen.getAllByTestId('todo-item-text')[0]).toHaveTextContent('1');

        fireEvent.click(screen.getAllByTestId('todo-remove-button')[0]);
        
        expect(screen.getAllByTestId('todo-item').length).toBe(2);
        expect(screen.getAllByTestId('todo-item-text')[0]).toHaveTextContent('2');

	});
});
