import Head from "next/head";

interface GenericMetaProps {
	title: string;
	description: string;
}

export default function GenericMeta({ title, description }: GenericMetaProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="https://imgur.com/ThoI9PL.png"/>  
			<meta property="og:image:width" content="1563" />
                        <meta property="og:image:height" content="1563" />
		</Head>
	);
}
