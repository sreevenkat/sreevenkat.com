import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import { MDXComponents } from '../../components/MDXComponents';
import { BlogFrontMatter, BlogFrontMatterValidator } from '../../types';
import { getNoteMetadata, postFilePaths } from '../../utils/mdxUtils';
import decodeWith from '../../utils/ioTsUtils';
import { Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';

export default function PostPage(props: { source: any; frontMatter: BlogFrontMatter; postFileName: string }) {
	const frontMatter = decodeWith(BlogFrontMatterValidator)(props.frontMatter);
	const publishedAt = frontMatter.publishedAt;
	const postTitle = frontMatter.title;
	const postDescription = frontMatter.description;
	const postLink = `${frontMatter.__resourcePath.replace('.mdx', '')}`;
	const postHeroImage = frontMatter.hero;

	return (
		<>
			<Layout
				title={postTitle}
				description={postDescription}
				relativeCanonicalURL={`/posts/${postLink}`}
				keywords={frontMatter.tags}
				heroImage={postHeroImage}
			>
				<Stack
					as="article"
					spacing={8}
					justifyContent="center"
					alignItems="flex-start"
					m="0 auto 4rem auto"
					w="100%"
				>
					<Flex direction={'column'} py={5} width={'100%'}>
						<Heading as={'h1'} size={'2xl'} paddingY={2} overflowWrap={'normal'}>
							{frontMatter.title}
						</Heading>
						<Text color="grey">Bharat Kalluri / {publishedAt}</Text>
					</Flex>

					{postHeroImage && (
						<Flex justifyContent={'center'} w={'100%'}>
							<Image src={postHeroImage} alt={postTitle} borderRadius={'5px'} />
						</Flex>
					)}

					<MDXRemote {...props.source} components={MDXComponents} />
				</Stack>
			</Layout>
		</>
	);
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
	const postFileName = `${params.slug}.mdx`;
	const { frontMatter, content } = getNoteMetadata(postFileName);
	const mdxSource = await serialize(content, {
		scope: frontMatter,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: frontMatter,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
