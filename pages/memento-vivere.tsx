import { VStack, HStack, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { SelfChiselingIcon } from '../components/SelfChiselingIcon';

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
		<HStack alignItems="flex-start" spacing={6} width="100%" flexWrap="wrap">
			<Text fontSize="lg" fontStyle="italic" opacity={0.8} flex="1" minW="240px">
				A block of stone doesn’t become a sculpture by addition — it becomes one by carving away
				everything that isn’t the shape within. Every year, I chisel a little more: writing down how
				I want to be remembered, and the values and traits I want to hold onto and work towards.
			</Text>
			<SelfChiselingIcon flexShrink={0} opacity={0.85} />
		</HStack>
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
