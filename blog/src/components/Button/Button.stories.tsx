import type { Meta, StoryObj } from "@storybook/react";
import Botao from ".";
import { IButtonProps } from "./IButtonProps.tsx";

const meta = {
	title: "@components/Botao",
	component: Botao,
	tags: ["autodocs"],
} satisfies Meta<typeof Botao>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: IButtonProps) => <Botao {...args} />;
export const Secondary: Story = (args: IButtonProps) => <Botao {...args} />;
export const Tertiary: Story = (args: IButtonProps) => <Botao {...args} />;
export const ButtonIcon: Story = (args: IButtonProps) => <Botao {...args} />;
export const Icon: Story = (args: IButtonProps) => <Botao {...args} />;

Default.args = {
	...Default.args,
	label: "Cadastrar",
	className: "br-button primary mr-3",
	action: () => {
		alert("Cliquei!");
	},
};

Secondary.args = {
	...Default.args,
	label: "Entrar",
	className: "br-button secondary mr-3",
	action: () => {
		alert("Cliquei!");
	},
};

Tertiary.args = {
	...Default.args,
	label: "Entrar",
	className: "br-button mr-3",
	action: () => {
		alert("Cliquei!");
	},
};

ButtonIcon.args = {
	...Default.args,
	label: "Entrar",
	className: "br-button",
	action: () => {
		alert("Cliquei!");
	},
	icon: (
		<i
			className="fas fa-user"
			aria-hidden="true"
		></i>
	),
};

Icon.args = {
	...Default.args,
	label: "",
	className: "br-button circle small",
	action: () => {
		alert("Cliquei!");
	},
	icon: (
		<i
			className="fa fa-paper-plane"
			aria-hidden="true"
		></i>
	),
};
