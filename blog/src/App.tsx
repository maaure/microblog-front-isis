import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
	const [numero, setNumero] = useState<number>(0);
	const [nome, setNome] = useState<string>("");

	function decrescimo() {
		setNumero(numero - 1);
	}

	useEffect(() => {
		console.log("Olá useEffect");
	}, []);

	return (
		<>
			<div className="container">
				<Button
					action={decrescimo}
					label="Entrar"
					className="br-sign-in mt-3 mt-sm-0 ml-sm-3"
					icon={
						<i
							className="fas fa-user"
							aria-hidden="true"
						></i>
					}
				/>
			</div>
		</>
	);
}

export default App;
