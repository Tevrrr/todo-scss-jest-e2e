export const loadDataFromCache = (props = ()=>{}) => {
	const counterID_JSON = localStorage.getItem('counterID');
    const todos_JSON = localStorage.getItem('todos');

    let counterID = 0;
    let todos = [];

	if (counterID_JSON) {
		counterID = JSON.parse(counterID_JSON);
	}
	if (todos_JSON) {
		todos = JSON.parse(todos_JSON);
	}

    props(todos, counterID, true);
    return { todos, counterID };
};