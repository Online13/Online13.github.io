
type Experience = {
	inc: string;
	post: string;
	duration: {
		start: string;
		end: string;
	};
	description: string;
};

export const EXP_DATA: Experience[] = [
	{
		inc: "Tenafli",
		post: "Software engineer",
		duration: {
			start: "july 2023",
			end: "october 2023",
		},
		description:
			"Création d'une application pour la numérisation des processus de gestion du personnel pénitentiaire et formation du personnel sur son utilisation.",
	},
	{
		inc: "team-tic",
		post: "React developer",
		duration: {
			start: "july 2023",
			end: "november 2023",
		},
		description:
			"Conception, développement et déploiement d'une application mobile en React Native avec une architecture de microservices, après avoir étudié les utilisateurs cibles et choisi les bibliothèques mobiles appropriées.",
	},
	{
		inc: "mtp",
		post: "React Native developer",
		duration: {
			start: "february 2023",
			end: "september 2023",
		},
		description:
			"Développement d'une application mobile pour le Ministère des Travaux Publics visant à numériser les infrastructures routières à Madagascar.",
	},
	{
		inc: "team-tic",
		post: "Fullstack Js developer",
		duration: {
			start: "december 2022",
			end: "april 2023",
		},
		description:
			"Développement d'une application web de gestion des informations figurées sur le document PERSUAP pour Catholic Relief Service.",
	},
	{
		inc: "mndpt",
		post: "Software Auditor & Data cleaner",
		duration: {
			start: "august 2022",
			end: "march 2023",
		},
		description:
			"Nettoyage des données dans la base de données EDUTI, développement d'un algorithme de matching et audit du système EDUTIC utilisé par le gouvernement.",
	},
	{
		inc: "afridoctor",
		post: "Fullstack Js developer",
		duration: {
			start: "november 2021",
			end: "august 2022",
		},
		description:
			"Maintenance du site web et création de nouvelles fonctionnalités en collaboration avec l'équipe d'AfriDoctor, ainsi que développement d'une version mobile du site en Flutter.",
	},
];