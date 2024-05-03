import { useEffect, useState } from "react";
import "./App.css";
import Feed from "./pages/Feed";

function App() {
	useEffect(() => {
		console.log("Olá useEffect");
	}, []);

	return (
		<>
			<Feed />
		</>
	);
}

export default App;
