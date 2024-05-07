import { useForm, Form } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	username: yup
		.string()
		.max(12, "O username deve ter no máximo 12 caracteres!")
		.required("Username é obrigatório!"),
	nome: yup
		.string()
		.max(40, "O nome deve ter no máximo 40 caracteres!")
		.required("Nome é obrigatório!"),
	senha: yup
		.string()
		.max(20, "A senha deve ter no máximo 20 caracteres!")
		.required("Senha é obrigatória!"),
});

// interface IFormularioProps {
// 	titulo: string;
// 	nomeBotao: string;
// }

function Formulario() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	function onSubmit(data): void {
		console.log(data);
	}

	return (
		<>
			<div className="container-lg col-sm-6 col-md-4 col-lg-4">
				<div className="br-card h-fixed">
					<div className="mt-6">
						<div className="p-4">
							<div className="">
								<p className="header-title text-up-03">
									Faça seu cadastro
								</p>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div
										className={`br-input ${errors.username !== undefined ? "danger" : ""}`}
									>
										<label htmlFor="username">
											Username:
										</label>
										<input
											id="username"
											type="text"
											placeholder="Digite seu username..."
											{...register("username")}
										/>
										{errors.username !== undefined && (
											<span
												className="feedback danger"
												role="alert"
												id="danger"
											>
												<i
													className="fas fa-times-circle"
													aria-hidden="true"
												></i>
												{errors.username?.message}
											</span>
										)}
									</div>

									<div
										className={`br-input ${errors.nome !== undefined ? "danger" : ""}`}
									>
										<label htmlFor="nome">Nome:</label>
										<input
											id="nome"
											type="text"
											placeholder="Digite seu nome..."
											{...register("nome")}
										/>
										{errors.nome !== undefined && (
											<span
												className="feedback danger"
												role="alert"
												id="danger"
											>
												<i
													className="fas fa-times-circle"
													aria-hidden="true"
												></i>
												{errors.nome?.message}
											</span>
										)}
									</div>

									<div
										className={`br-input ${errors.senha !== undefined ? "danger" : ""}`}
									>
										<label htmlFor="senha">Senha:</label>
										<input
											id="senha"
											type="text"
											placeholder="Digite sua senha..."
											{...register("senha")}
										/>
										{errors.senha !== undefined && (
											<span
												className="feedback danger"
												role="alert"
												id="danger"
											>
												<i
													className="fas fa-times-circle"
													aria-hidden="true"
												></i>
												{errors.senha?.message}
											</span>
										)}
									</div>

									<div className="mt-4">
										<button className="br-button block primary">
											Cadastrar
										</button>
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

export default Formulario;
