import { Box, Flex, Heading, Link, Skeleton, Stack, Tag, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { AiTwotonePushpin } from 'react-icons/ai';

interface ILinkCardProps {
	name: string;
	description?: string;
	link: string;
	tags?: Array<string>;
	isPinned?: boolean;
	isLoading?: boolean;
}

const LinkCard = ({ name, description, link, tags, isPinned, isLoading }: ILinkCardProps) => {
	const isLoadingFromProps = isLoading || false;
	return (
		<NextLink href={link} passHref>
			<Link 
				w="100%" 
				_hover={{ textDecoration: 'none', transform: 'translateY(-2px)', boxShadow: 'lg' }}
				borderWidth="1px" 
				borderRadius="lg" 
				p={6}
				mb={4}
				transition="all 0.2s"
				display="block"
			>
				<Skeleton isLoaded={!isLoadingFromProps}>
					<Box display="block" width="100%">
						<Flex width="100%" align="flex-start" justifyContent="space-between" flexDirection="column">
							<Stack 
								direction="row" 
								align="center" 
								width="100%" 
								justify="space-between"
								spacing={4}
							>
								<Heading size="md" as="h3" letterSpacing="tight">
									{name}
								</Heading>
								{isPinned === true && <AiTwotonePushpin size="20" />}
							</Stack>
							{description && (
								<Text mt="1rem" fontSize="md" variant="solid" colorScheme="teal">
									{description}
								</Text>
							)}
							{tags && (
								<Stack direction="row" mt="1rem">
									{tags?.map((tag: string) => (
										<Tag key={tag} size="sm">
											{tag}
										</Tag>
									))}
								</Stack>
							)}
						</Flex>
					</Box>
				</Skeleton>
			</Link>
		</NextLink>
	);
};

export default LinkCard;
