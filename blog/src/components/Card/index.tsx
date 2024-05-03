import { Link } from "react-router-dom";
import Button from "../Button";
import "../Card/style.css";

interface ICardProps {
	title: string;
	name: string;
	description: string;
	image?: string;
}

function Card({ title, name, description, image }: ICardProps) {
	function pass() {
		console.log("pass");
	}

	return (
		<div>
			<div className="container-lg col-sm-6 col-md-4 col-lg-8">
				<div className="br-card h-fixed">
					<div className="card-header">
						<div className="d-flex">
							<span
								className="br-avatar mr-2"
								title={name}
							>
								<span className="content">
									{image ? (
										<img
											src={image}
											className="avatar-img"
											alt="Avatar"
										/>
									) : (
										<i
											className="fas fa-user"
											aria-hidden="true"
										></i>
									)}
								</span>
							</span>
							<div className="ml-3">
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
						<p>{description}</p>
					</div>
					<div className="card-footer">
						<div className="d-flex">
							<div className="ml-auto">
								<Link to="/comment">
									<Button
										className="br-button tertiary botao-com-alteracao"
										action={pass}
										label="Comentar"
									></Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
