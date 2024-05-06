import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "../Card/style.css";
import Image from "../../assets/images/default.png";
import { ICardProps } from "./ICardProps";

/** Componente de card */
function Card({ title, name, description, image }: ICardProps) {
	const navigate = useNavigate();

	function commentHandleClick() {
		navigate("/comment");
	}

	const pass = () => {
		console.log("pass");
	};

	return (
		<div>
			<div className="container-lg col-sm-6 col-md-4 col-lg-6">
				<div className="br-card h-fixed">
					<div className="card-header">
						<div className="d-flex">
							<div className="ml-1">
								<div className="text-weight-semi-bold text-up-02">
									{title}
								</div>
								<div>{name}</div>
							</div>
							<div className="ml-auto">
								<Button
									label=""
									className="br-button circle"
									icon={
										<i
											className="fas fa-ellipsis-v"
											aria-hidden="true"
										></i>
									}
									action={pass}
								/>
							</div>
						</div>
					</div>

					<div
						className="card-content"
						tabIndex={0}
					>
						<div className="mb-4">
							{image ? (
								<img
									src={image}
									className="image"
									alt="Avatar"
								/>
							) : (
								<img
									src={Image}
									alt="Imagem padrão"
									className="image"
								/>
							)}
						</div>
						<p>{description}</p>
					</div>
					<div className="card-footer">
						<div className="d-flex">
							<div className="ml-auto">
								<Button
									className="br-button tertiary botao-com-alteracao"
									action={commentHandleClick}
									label="Comentar"
								></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
