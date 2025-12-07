import "../styles/index.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shiksha Sagar - Academic Support Platform",
	description: "Personalized academic support for assignments, projects, and exams.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" />
      </head>
			<body>{children}</body>
		</html>
	);
}
