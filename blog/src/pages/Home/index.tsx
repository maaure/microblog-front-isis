import ".";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { useEffect, useState } from "react";

import PublicationService from "../../services/PublicationService";

function Home() {
	const [publicacoes, setPublicacoes] = useState<any[]>([]);

	useEffect(() => {
		handleData();
	}, []);

	function handleData() {
		// axiosInstance.get("publicacoes").then((res) => {
		// 	const { data } = res;
		// 	console.log(data);
		// });
		PublicationService.listarPublicacoes()
			.then((res) => {
				const { data } = res;
				console.log(data);
				setPublicacoes(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return (
		<>
			{publicacoes.map((publicacao) => {
				return <p>{publicacao.name}</p>;
			})}
			<Header />
			<div className="mt-4 mb-4">
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
			</div>
		</>
	);
}

export default Home;
