import { IButtonProps } from "./IButtonProps";

/** Componente de botão */
export default function Button(props: IButtonProps) {
	const { action, label, className, icon, type } = props;
	return (
		<button
			onClick={action}
			className={className}
			type={type}
		>
			{icon}
			{label}
		</button>
	);
}
