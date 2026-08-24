import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

interface ICustomLinkProps {
	href: string;
	children: string;
	fontSize?: number;
}

export const CustomLink = (props: ICustomLinkProps) => {
	const href = props.href;
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

	return (
		<Link
			as={isInternalLink ? NextLink : undefined}
			color="hsl(208, 99%, 44%)"
			_dark={{ color: 'hsl(208, 95%, 68%)' }}
			isExternal={!isInternalLink}
			{...props}
		>
			{props.children}
			{!isInternalLink && <ExternalLinkIcon mx="2px" />}
		</Link>
	);
};
