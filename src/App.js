/** @format */

import InputPanel from "./components/InputPanel";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className='App'>
			<div className='Todo'>
				<InputPanel/>
				<TodoList/>
			</div>
		</div>
	);
}

export default App;
