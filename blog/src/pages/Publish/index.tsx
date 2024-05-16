import { useForm, Form } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import PublishService from "../../services/PublishService";
import Upload from "../../components/Upload";

const schema = yup.object().shape({
	titulo: yup
		.string()
		.max(30, "O título deve ter no máximo 30 caracteres!")
		.required("Título é obrigatório!"),
	imagem: yup.mixed().test("file", "A imagem é obrigatória!", (value) => {
		let fileValue = value as FileList;
		if (fileValue?.length > 0) {
			return true;
		}
		return false;
	}),
	descricao: yup.string().required("Descrição é obrigatória!"),
});

function Publish() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	const formData = new FormData();
	const handleSavePublish = async (data) => {
		try {
			console.log(data);
			formData.append("titulo", data.titulo);
			formData.append("descricao", data.descricao);
			formData.append("imagem", data.imagem[0]);

			const response = await PublishService.criarPublicacao(formData);
			console.log(response);

			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

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

									<Upload
										control={control}
										name="imagem"
										label="Imagem: "
									/>

									{/* <div
										className={`br-input ${errors.imagem !== undefined ? "danger" : ""}`}
									>
										<div className="br-upload">
											<label
												className="upload-label"
												htmlFor="single-file"
											>
												<span>Envio de imagem:</span>
											</label>

											<input
												className="upload-input"
												id="single-file"
												type="file"
												aria-label="enviar arquivo"
												{...register("imagem")}
											/>

											<button
												className="upload-button"
												type="button"
												aria-hidden="true"
											>
												<i
													className="fas fa-upload"
													aria-hidden="true"
												></i>
												<span>Selecione o arquivo</span>
											</button>
											<div className="upload-list"></div>
										</div>
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
									</div> */}

									<div
										className={` ${errors.descricao !== undefined ? "danger" : ""}`}
									>
										<div className="br-textarea">
											<label htmlFor="textarea-id1">
												Descrição:
											</label>
											<textarea
												id="textarea-id1"
												placeholder="Digite sua descrição..."
												{...register("descricao")}
											></textarea>
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
