import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route path="/publish" />
					<Route path="/login" />
					<Route path="/comment" />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
