import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
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
