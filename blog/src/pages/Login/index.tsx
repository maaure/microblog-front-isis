import { useForm, Form } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import LoginService from "../../services/LoginService";
import Header from "../../components/Header";

const schema = yup.object().shape({
	username: yup
		.string()
		.max(12, "O username deve ter no máximo 12 caracteres!")
		.required("Username é obrigatório!"),
	senha: yup
		.string()
		.max(20, "A senha deve ter no máximo 20 caracteres!")
		.required("Senha é obrigatória!"),
});

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [senha, setSenha] = useState("");

	const handleSaveUser = async (data) => {
		try {
			const response = await LoginService.realizarLogin(
				data.username,
				data.senha,
			);
			console.log(response);
			setUsername(username);
			setSenha(senha);
			const access = response.access;
			localStorage.setItem("access", access);
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
									Faça seu login
								</p>
								<form onSubmit={handleSubmit(handleSaveUser)}>
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
										className={` ${errors.senha !== undefined ? "danger" : ""}`}
									>
										<div className="br-input input-button">
											<label htmlFor="input-password">
												Senha
											</label>
											<input
												id="input-password"
												type="password"
												placeholder="Digite sua senha..."
												{...register("senha")}
											/>
											<button
												className="br-button"
												type="button"
												aria-label="Exibir senha"
												role="switch"
												aria-checked="false"
											>
												<i
													className="fas fa-eye"
													aria-hidden="false"
												></i>
											</button>
										</div>

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
										<Button
											label="Entrar"
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

export default Login;
