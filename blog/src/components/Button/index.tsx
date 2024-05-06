import { IButtonProps } from "./IButtonProps";

/** Componente de botão */
export default function Button(props: IButtonProps) {
	const { action, label, className, icon } = props;
	return (
		<button
			onClick={action}
			className={className}
		>
			{icon}
			{label}
		</button>
	);
}
