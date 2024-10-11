import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nexaText = localFont({
	src: [
		{
			path: "./fonts/NexaTextThin.woff2",
			weight: "50",
			style: "normal",
		},
		{
			path: "./fonts/NexaTextExtraLight.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "./fonts/NexaTextLight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "./fonts/NexaTextBook.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/NexaTextRegular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/NexaTextExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/NexaTextHeavy.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "./fonts/NexaTextBlack.woff2",
			weight: "950",
			style: "normal",
		},
	],
	variable: "--font-nexa-text",
});

export const metadata: Metadata = {
	title:
		"AI-Assisted Condition Monitoring and Asset Performance Management | TRACTIAN",
	description:
		"Meet the most comprehensive system on the market and avoid failures, reduce costs, and increase your industry's productivity! Condition monitoring sensors, predictive maintenance software, and asset management.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nexaText.variable} font-sans`}>{children}</body>
		</html>
	);
}
