import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import Layout from '../components/Layout';

const UsesPage = () => {
	// TODO: Add an image of the setup here

	const computerSetup = [
		'13" Macbook Pro (M1)',
		'Razer Basilisk X HyperSpeed Mouse',
		'KeyChron K2V2 mechanical keyboard',
		'Assembled Desktop with Ryzen 5 5600X and RTX 3070(FE)',
		'LG 32" QHD Monitor',
	];

	const softwareAndServices = [
		'Firefox',
		'OSX, Windows',
		'VS Code',
		'WebStorm',
		'Slack Desktop for office comms',
		'Spotify Desktop for music (scrobbles to last.fm)',
		'1Password',
		'Github',
		'Bear for notes',
		'Signal and Whatsapp for messaging',
	];

	const gamingSetup = [
		'PC',
		'Nintendo Switch',
		'Logitech Gamepad F310',
		'8BitDo SN30Pro+',
		'Steam',
		'Discord'
	];

	return (
		<Layout title="Uses" relativeCanonicalURL="/uses">
			<Stack direction="column" spacing={5} fontSize="lg">
				<Text fontSize="6xl" fontWeight="extrabold">
					Uses
				</Text>

				<Text>Here are the tools and tech I use to code, write, get work done in general and play.</Text>

				<Text fontSize="2xl" fontWeight="extrabold">
					Computer / Laptop / Hardware setup
				</Text>
				<UnorderedList spacing={3}>
					{computerSetup.map((el) => (
						<ListItem key={el}>{el}</ListItem>
					))}
				</UnorderedList>

				<Text fontSize="2xl" fontWeight="extrabold">
					Software and Services
				</Text>
				<UnorderedList spacing={3}>
					{softwareAndServices.map((el) => (
						<ListItem key={el}>{el}</ListItem>
					))}
				</UnorderedList>

				<Text fontSize="2xl" fontWeight="extrabold">
					Gaming hardware and Platforms
				</Text>
				<UnorderedList spacing={3}>
					{gamingSetup.map((el) => (
						<ListItem key={el}>{el}</ListItem>
					))}
				</UnorderedList>
			</Stack>
		</Layout>
	);
};

export default UsesPage;
