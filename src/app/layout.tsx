import "../styles/index.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shiksha Sagar - Academic Support Platform",
	description: "Personalized academic support for assignments, projects, and exams.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
