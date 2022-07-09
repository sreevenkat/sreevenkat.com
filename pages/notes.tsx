import { Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import React, { useState } from 'react';
import { BlogFrontMatter } from '../types';
import { SearchIcon } from '@chakra-ui/icons';
import { searchInFrontMatter, sortByPinnedAndPublishedAt } from '../utils/postUtils';
import { getNotesMetadata } from '../utils/mdxUtils';

export function getStaticProps() {
	return { props: { notes: getNotesMetadata() } };
}

const Blog = ({ notes }: { notes: BlogFrontMatter[] }) => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const sortedNotes = notes.sort(sortByPinnedAndPublishedAt);
	return (
		<Layout
			title="Notes"
			description="Notes by Sree Venkat"
			relativeCanonicalURL="/notes"
		>
			<Heading letterSpacing="tight" mb={2} as="h1">
				Notes
			</Heading>
			<Text>
				These will be notes from the interesting and random projects, their findings and for my own future reference as well.
			</Text>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.300" />
				</InputLeftElement>
				<Input
					type="text"
					placeholder="Search"
					onChange={(e) => setSearchQuery(e.target.value?.toLowerCase())}
				/>
			</InputGroup>
			{sortedNotes
				.filter((f: BlogFrontMatter) => !f.draft && f.isBlogPost !== true)
				.filter((f: BlogFrontMatter) => searchInFrontMatter(f, searchQuery))
				.map((frontMatter: BlogFrontMatter) => (
					<PostCard key={frontMatter.title} frontMatter={frontMatter} folderPrefix="posts/" />
				))}
		</Layout>
	);
};

export default Blog;
