export interface StackIconItem {
	name: string;
	icon: string;
	src?: never;
}

export interface StackCustomItem {
	name: string;
	icon?: never;
	src: string;
}

export interface ProjectInfo {
	name: string;
	description: React.ReactNode;
	image: string;
	url: string;
	stack: (StackIconItem | StackCustomItem)[];
}

export const projects: ProjectInfo[] = [
	{
		name: "Skyare",
		description:
			"Yenilikçi sosyal ağ projesi...",
		image: "/images/projects/skyare.png",
		url: "https://skyare.net?utm_source=sercee.com.tr",
		stack: [
		]
	},
	{
		name: "Londone",
		description:
			"Your dreams. Our solutions.",
		image: "/images/projects/lo.png",
		url: "https://lond.one?utm_source=sercee.com.tr",
		stack: [
		]
	},
	{
		name: "Profile Card",
		description:
			"My first website XD",
		image: "/images/projects/pcp.png",
		url: "https://linkcard-ten.vercel.app?utm_source=sercee.com.tr",
		stack: [
			{
				name: "HTML",
				icon: "html"
			},
			{
				name: "CSS",
				icon: "css"
			},
			{
				name: "JavaScript",
				icon: "js"
			},
		]
	},
	{
		name: "Calorie Calculator",
		description:
			"My first Python project i released for public.",
		image: "/images/projects/pcc.png",
		url: "https://github.com/furinajpg/Kalori-Hesaplay-c-?utm_source=sercee.com.tr",
		stack: [
			{
				name: "Python",
				icon: "python"
			}
		]
	},
];
