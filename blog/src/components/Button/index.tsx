interface IButtonProps {
	action: () => void;
	label: string;
	className: string;
	icon?: JSX.Element;
}

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
