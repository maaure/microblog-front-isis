import ".";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Formulario from "../../components/Formulario";

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
				setPublicacoes(data.results);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return (
		<>
			<Header />
			{publicacoes.map((publicacao) => {
				return (
					<div key={publicacao.id}>
						<div className="mt-4 mb-4">
							<Card
								title={publicacao.titulo}
								name={publicacao.autor.nome}
								description={publicacao.descricao}
								image={publicacao.imagem}
							/>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default Home;
