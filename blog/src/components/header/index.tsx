import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
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
								<Link to="/publish">
									<Button
										label=""
										action={pass}
										icon={
											<i
												className="fa fa-paper-plane"
												aria-hidden="true"
											></i>
										}
										className="br-button circle small"
									/>
								</Link>
							</div>

							<span className="br-divider vertical mx-half mx-sm-1"></span>

							<div className="header-login">
								<div className="header-sign-in">
									<Link to="/login">
										<Button
											label="Entrar"
											className="br-sign-in small"
											icon={
												<i
													className="fas fa-user"
													aria-hidden="true"
												></i>
											}
											action={pass}
										/>
									</Link>
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
