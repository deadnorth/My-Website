export interface LanguagesInfo {
	name: string;
	icon: string;
	href: string;
	bg?: string;
}

export const languages: LanguagesInfo[] = [
	{
		name: "Turkish / Native",
		icon: "971384335531921428/1152694130925912116/800px-Flag_of_Turkey.png",
		href: "https://en.wikipedia.org/wiki/Turkish_language"
	},
	{
		name: "English / B1",
		icon: "971384335531921428/1152694131177562292/1200px-Flag_of_the_United_Kingdom_281-229.png",
		href: "https://en.wikipedia.org/wiki/English_language",
	},
	{
		name: "Japanese / A2",
		icon: "971384335531921428/1152694131831881821/800px-Flag_of_Japan.png",
		href: "https://en.wikipedia.org/wiki/Japanese_language",
	},
	{
		name: "Italian / A1",
		icon: "971384335531921428/1152694131605373028/800px-Flag_of_Italy.png",
		href: "https://en.wikipedia.org/wiki/Italian_language"
	},
];
