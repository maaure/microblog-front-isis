import type { Meta, StoryObj } from "@storybook/react";
import Header from ".";
import { IHeaderProps } from "./IHeaderProps";
import { BrowserRouter } from "react-router-dom";

const meta = {
	title: "@components/Header",
	component: Header,
	tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desconectado: Story = (args: IHeaderProps) => (
	<BrowserRouter>
		{" "}
		<Header {...args} />{" "}
	</BrowserRouter>
);

export const Logado: Story = (args: IHeaderProps) => (
	<BrowserRouter>
		{" "}
		<Header {...args} />{" "}
	</BrowserRouter>
);

Desconectado.args = {
	...Desconectado.args,
};

Logado.args = {
	...Logado.args,
	name: "Isis",
};
