import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import useAuth from "./hooks/useAuth";

// const Private = ({ Item }) => {
// 	const { signed } = useAuth();

// 	return signed > 0 ? <Item /> : <Login />;
// };

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
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route path="/comment" />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
