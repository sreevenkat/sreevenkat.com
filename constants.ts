import { IProjectCardProps } from './interfaces';
import { DefaultSeoProps } from 'next-seo';

// TODO: on local, this should be localhost
export const BASE_URL: string = 'http://localhost:3000';

export const PROJECT_LIST: Array<IProjectCardProps> = [];
const DEFAULT_TITLE = 'Sree Venkat';
const TWITTER_HANDLE = '@sreevnkt';

export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
	title: DEFAULT_TITLE,
	canonical: BASE_URL,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: BASE_URL,
		title: DEFAULT_TITLE,
		images: [
			{
				url: 'https://sreevenkat.com/static/images/og.jpg',
				alt: DEFAULT_TITLE,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		handle: TWITTER_HANDLE,
		site: TWITTER_HANDLE,
		cardType: 'summary_large_image',
	},
};

export const RSS_URL = `/feed.xml`;
export const TWITTER_URL = 'https://twitter.com/sreevnkt';
export const GITHUB_URL = 'https://github.com/sreevenkat';
export const LINKEDIN_URL = 'https://linkedin.com/in/sreevenkat';
// export const EMAIL = 'hi@sreevenkat.com';
export const TELEGRAM_URL = "https://t.me/sreevnkt"
