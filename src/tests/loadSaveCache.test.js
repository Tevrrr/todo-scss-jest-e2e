/** @format */

import { loadDataFromCache } from '../common/Cache/loadDataFromCache.js';
import { saveDataToCache } from '../common/Cache/saveDataToCache.js';

describe('Cache test', () => {
	test('Load and save cache test', () => {
		const todos = [
			{ id: 1, checked: false, text: '1' },
			{ id: 2, checked: false, text: '2' },
			{ id: 3, checked: false, text: '3' },
		];
		const counterID = 3;

		saveDataToCache(todos, counterID);

		const spyJSONParse = jest.spyOn(JSON, 'parse');

		loadDataFromCache((saveTodos, saveCounterID) => {
			expect(saveTodos).toStrictEqual(todos);
			expect(saveCounterID).toBe(counterID);
		});

		expect(spyJSONParse).toBeCalledTimes(2);
    });
    
	test('Load and save empty cache test', () => {
		localStorage.clear();
        const spyJSONParse = jest.spyOn(JSON, 'parse');
        
		expect(loadDataFromCache(() => {})).toBeNull();

		expect(spyJSONParse).toBeCalledTimes(0);
	});
});
