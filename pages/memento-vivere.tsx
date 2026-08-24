import { VStack, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Layout from '../components/Layout';

const mementoVivereTraits: Record<string, string[]> = {
	'2026': [
		'Seeks and brings clarity',
		'Disciplined',
		'Succinct communicator',
		'Respectfully vocal',
	],
};

const MementoVivereContents = () => (
	<VStack alignItems={"flex-start"} spacing='24px'>
		<Heading textAlign="left" float={"left"}>Memento Vivere</Heading>
		<Text fontSize="lg" fontStyle="italic" opacity={0.8}>
			A block of stone doesn’t become a sculpture by addition — it becomes one by carving away
			everything that isn’t the shape within. Every year, I chisel a little more: writing down how
			I want to be remembered, and the values and traits I want to hold onto and work towards.
		</Text>
		{Object.entries(mementoVivereTraits)
			.sort(([a], [b]) => Number(b) - Number(a))
			.map(([year, traits]) => (
				<VStack key={year} alignItems="flex-start" spacing="8px" pl={2}>
					<Text fontSize="md" fontWeight="extrabold">{year}</Text>
					<UnorderedList spacing={2}>
						{traits.map((trait) => (
							<ListItem key={trait} fontSize="lg">{trait}</ListItem>
						))}
					</UnorderedList>
				</VStack>
			))}
	</VStack>
);

const MementoViverePage = () => (
	<Layout title="Memento Vivere" description="How I want to be remembered" relativeCanonicalURL="/memento-vivere">
		<MementoVivereContents />
	</Layout>
);

export default MementoViverePage;
