import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import LinkCard from '../components/LinkCard';
import { PROJECT_LIST } from '../constants';
import { getNotesMetadata } from '../utils/mdxUtils';
import { BlogFrontMatter } from '../types';
import { sortByPublishedAt } from '../utils/postUtils';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/button';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PostCard } from '../components/PostCard';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from '../constants'

export function getStaticProps() {
	return { props: { notes: getNotesMetadata() } };
}

const ProjectListComponent = () => (
	<Stack py={5} spacing={5}>
		<Heading>Projects</Heading>
		<Stack direction="column" spacing={5}>
			{PROJECT_LIST.map((project) => (
				<LinkCard
					key={project.name}
					name={project.name}
					description={project.description}
					link={project.link}
				/>
			))}
		</Stack>
	</Stack>
);

const ProfileSection = () => (
	<Stack direction={{ base: 'column', md: 'row' }} spacing={8} py={10}>
		<Stack justifyContent={'center'}>
			<Heading fontSize="5xl" fontWeight="extrabold">
				Hi, I&apos;m Sree Venkat Ganapathi 👋
			</Heading>
			<Text fontSize={'md'}>
				Welcome to my website where I share some of my learnings.
			</Text>
		</Stack>
	</Stack>
);

const RecentBlogPosts = ({ recentPosts }: { recentPosts: BlogFrontMatter[] }) => (
	<Stack py={5} spacing={5}>
		<Heading>Posts</Heading>
		<Stack direction="column" spacing={5}>
			{recentPosts.map((frontMatter) => (
				<PostCard key={frontMatter.title} frontMatter={frontMatter} folderPrefix="posts/" />
			))}

			<Flex flexDirection={'row-reverse'}>
				<NextLink href={'/posts'}>
					<Button>
						<Stack direction="row" align="center" style={{ width: '100%' }} justify="space-between">
							<Text>View all posts</Text>
							<AiOutlineArrowRight size="20" />
						</Stack>
					</Button>
				</NextLink>
			</Flex>
		</Stack>
	</Stack>
);

const RecentNotes = ({ recentNotes }: { recentNotes: BlogFrontMatter[] }) => (
	<Stack py={5} spacing={5}>
		<Heading>Notes</Heading>
		<Stack direction="column" spacing={5}>
			{recentNotes.map((frontMatter) => (
				<PostCard key={frontMatter.title} frontMatter={frontMatter} folderPrefix="notes/" />
			))}

			<Flex flexDirection={'row-reverse'}>
				<NextLink href={'/notes'}>
					<Button>
						<Stack direction="row" align="center" style={{ width: '100%' }} justify="space-between">
							<Text>View all notes</Text>
							<AiOutlineArrowRight size="20" />
						</Stack>
					</Button>
				</NextLink>
			</Flex>
		</Stack>
	</Stack>
);

const IndexPage = ({ notes }: { notes: BlogFrontMatter[] }) => {
	const recentPosts = !!notes ? notes.filter((note: BlogFrontMatter) => (note.isBlogPost)).sort(sortByPublishedAt).slice(0, 3): [];
	const recentNotes = !!notes ? notes.filter((note: BlogFrontMatter) => (!note.isBlogPost)).sort(sortByPublishedAt).slice(0, 3): [];
	return (
		<Layout title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} relativeCanonicalURL="">
			<Stack direction="column" spacing={5}>
				<ProfileSection />
				{!!recentPosts.length && <RecentBlogPosts recentPosts={recentPosts} />}
				{!!recentNotes.length && <RecentNotes recentNotes={recentNotes} />}

				{!!PROJECT_LIST.length && <ProjectListComponent />}
			</Stack>
		</Layout>
	);
};

export default IndexPage;
