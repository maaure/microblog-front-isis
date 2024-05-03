import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
	const [numero, setNumero] = useState<number>(0);

	function decrescimo() {
		setNumero(numero - 1);
	}

	useEffect(() => {
		console.log("Olá useEffect");
	}, []);

	return (
		<>
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

			<Card
				title="Como a internet funciona?"
				name="Demetria Devonne Lovato"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Tempore perferendis nam porro atque ex at,
				numquam non optio ab eveniet error vel ad
				exercitationem, earum et fugiat recusandae harum?
				Assumenda. Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Tempore perferendis nam porro
				atque ex at, numquam non optio ab eveniet error vel
				ad exercitationem, earum et fugiat recusandae harum?
				Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Tempore perferendis nam porro atque ex at,
				numquam non optio ab eveniet error vel ad
				exercitationem, earum et fugiat recusandae harum?
				Assumenda. Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Tempore perferendis nam porro
				atque ex at, numquam non optio ab eveniet error vel
				ad exercitationem, earum et fugiat recusandae harum?
				Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Tempore perferendis nam porro atque ex at,
				numquam non optio ab eveniet error vel ad
				exercitationem, earum et fugiat recusandae harum?
				Assumenda. Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Tempore perferendis nam porro
				atque ex at, numquam non optio ab eveniet error vel
				ad exercitationem, earum et fugiat recusandae harum?
				Assumenda."
				image="https://www.w3schools.com/w3images/avatar6.png"
			/>
		</>
	);
}

export default App;
