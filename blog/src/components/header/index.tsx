import Button from "../Button";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	function publishHandleClick() {
		navigate("/publish");
	}

	function loginHandleClick() {
		navigate("/login");
	}

	function pass() {
		console.log("pass");
	}
	return (
		<>
			<header className="br-header">
				<div className="container-lg">
					<div className="header-top">
						<div className="header-logo">
							<a href="#">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Gov.br_logo.svg/1200px-Gov.br_logo.svg.png"
									alt="logo gov.br"
								/>
							</a>
						</div>
						<div className="header-actions">
							<div className="header-links dropdown">
								<Button
									label=""
									action={publishHandleClick}
									icon={
										<i
											className="fa fa-paper-plane"
											aria-hidden="true"
										></i>
									}
									className="br-button circle small"
								/>
							</div>

							<span className="br-divider vertical mx-half mx-sm-1"></span>

							<div className="header-login">
								<div className="header-sign-in">
									<Button
										label="Entrar"
										className="br-sign-in "
										icon={
											<i
												className="fas fa-user"
												aria-hidden="true"
											></i>
										}
										action={loginHandleClick}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="header-bottom">
						<div className="header-menu">
							<div className="header-menu-trigger">
								<Button
									label=""
									action={pass}
									icon={
										<i
											className="fas fa-bars"
											aria-hidden="true"
										></i>
									}
									className="br-button small circle"
								/>
							</div>
							<div className="header-info">
								<div className="header-title">Blogov</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
