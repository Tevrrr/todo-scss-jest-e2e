/** @format */

export const saveDataToCache = (todos, counterID) => {
	localStorage.setItem('todos', JSON.stringify(todos));
	localStorage.setItem('counterID', counterID);
};
