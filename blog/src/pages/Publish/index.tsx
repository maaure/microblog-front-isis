import { useForm, Form } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import PublishService from "../../services/PublishService";

const schema = yup.object().shape({
	titulo: yup
		.string()
		.max(30, "O título deve ter no máximo 30 caracteres!")
		.required("Título é obrigatório!"),
	imagem: yup.string(),
	descricao: yup.string().required("Descrição é obrigatória!"),
});

function Publish() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	const [titulo, setTitulo] = useState("");
	const [imagem, setImagem] = useState("");
	const [descricao, setDescricao] = useState("");

	const handleSavePublish = async (data) => {
		try {
			const response = await PublishService.criarPublicacao(
				data.titulo,
				data.imagem,
				data.descricao,
			);
			console.log(response);
			setTitulo(titulo);
			setImagem(imagem);
			setDescricao(descricao);
			navigate("/");
			const access = response.access;
			localStorage.setItem("access", access);
		} catch (error) {
			console.error(error);
		}
	};

	// if (!Logado) {

	// }

	return (
		<>
			<Header />
			<div className="container-lg col-sm-6 col-md-4 col-lg-4">
				<div className="br-card h-fixed">
					<div className="mt-6">
						<div className="p-4">
							<div className="">
								<p className="header-title text-up-03">
									Faça sua publicação
								</p>
								<form
									onSubmit={handleSubmit(handleSavePublish)}
								>
									<div
										className={`br-input ${errors.titulo !== undefined ? "danger" : ""}`}
									>
										<label htmlFor="titulo">Título:</label>
										<input
											id="titulo"
											type="text"
											placeholder="Digite seu titulo..."
											{...register("titulo")}
										/>
										{errors.titulo !== undefined && (
											<span
												className="feedback danger"
												role="alert"
												id="danger"
											>
												<i
													className="fas fa-times-circle"
													aria-hidden="true"
												></i>
												{errors.titulo?.message}
											</span>
										)}
									</div>

									<div
										className={`br-input ${errors.imagem !== undefined ? "danger" : ""}`}
									>
										<label htmlFor="imagem">Imagem:</label>
										<input
											id="imagem"
											type="text"
											placeholder="Envia sua imagem..."
											{...register("imagem")}
										/>
										{errors.imagem !== undefined && (
											<span
												className="feedback danger"
												role="alert"
												id="danger"
											>
												<i
													className="fas fa-times-circle"
													aria-hidden="true"
												></i>
												{errors.imagem?.message}
											</span>
										)}
									</div>

									<div
										className={` ${errors.descricao !== undefined ? "danger" : ""}`}
									>
										<div className="br-input input-button">
											<label htmlFor="input-descricao">
												Descrição:
											</label>
											<input
												id="input-descricao"
												type="descricao"
												placeholder="Digite sua descrição..."
												{...register("descricao")}
											/>
											<button
												className="br-button"
												type="button"
												aria-label="Exibir descricao"
												role="switch"
												aria-checked="false"
											>
												<i
													className="fas fa-eye"
													aria-hidden="false"
												></i>
											</button>
										</div>

										{errors.descricao !== undefined && (
											<span
												className="feedback danger"
												role="alert"
												id="danger"
											>
												<i
													className="fas fa-times-circle"
													aria-hidden="true"
												></i>
												{errors.descricao?.message}
											</span>
										)}
									</div>

									<div className="mt-4">
										<Button
											label="Cadastrar publicação"
											className="br-button block primary"
											type="submit"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Publish;
