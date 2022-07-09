import { VStack, Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { CustomLink } from '../components/CustomLink';

export const AboutContents = () => (
	<VStack alignItems={"flex-start"} spacing='24px'>
		<Heading textAlign="left" float={"left"}>About</Heading>
		<Text fontSize="lg">
			Hey there! I’m a Software developer working at Refyne a fin-tech startup from India. In my free
			time I like read and implement research papers, explore FP and play games (Steam/Switch).
		</Text>
		<Text fontSize="lg">
			This blog is a digital repository where I intent to share and document the different things I explore from
			cooking - software - DIY - games. My hobbies include reading, cooking, games and game-design. Most of my
			personal projects can be found on github. You can also follow me on steam.
		</Text>
		<Text fontSize="lg">
			I also like to go on hikes and treks. The two major treks I have been to include KGL(Kashmir Great Lakes) and RoopKund.
		</Text>
		<Text fontSize="lg">
			Also, feel free to{' '}
			<CustomLink href={`https://calendly.com/sreevenkat`}>schedule a call with me</CustomLink>
			if you want to talk about tech, programming, open source, movies, books, games, game-design, philosophy and
			everything in between :)
		</Text>
	</VStack>
)

const AboutPage = () => (
	<Layout title="About" description="About Sree Venkat" relativeCanonicalURL="/about">
		<AboutContents />
		<ContactForm />
	</Layout>
);

export default AboutPage;
