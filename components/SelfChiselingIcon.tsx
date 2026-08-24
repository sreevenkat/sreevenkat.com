import { Icon, IconProps } from '@chakra-ui/react';

export const SelfChiselingIcon = (props: IconProps) => (
	<Icon viewBox="0 0 64 96" boxSize="96px" {...props}>
		{/* rock, still rough at the base the figure is rooted in */}
		<path
			d="M8,86 L6,76 L12,68 L10,60 L20,55 L32,53 L44,56 L52,63 L50,72 L54,80 L46,86 Z"
			fill="currentColor"
			fillOpacity={0.08}
			stroke="currentColor"
			strokeWidth={2}
			strokeLinejoin="round"
			strokeLinecap="round"
		/>
		<path d="M9,65 L13,66" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
		<path d="M11,74 L15,75" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />

		{/* legs, still rooted in the rock */}
		<path d="M30,38 L25,58" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
		<path d="M30,38 L31,60" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />

		{/* torso and head */}
		<path d="M30,15 L30,38" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
		<circle cx="30" cy="10" r="5" stroke="currentColor" strokeWidth={2} fill="none" />

		{/* arm raised with hammer */}
		<path d="M30,20 L20,15 L13,11" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />
		<rect x="4.5" y="8" width="10" height="5.5" rx="1.4" fill="currentColor" transform="rotate(-25 9.5 10.75)" />

		{/* arm striking a chisel into its own rock-bound legs */}
		<path d="M30,22 L39,29 L39,42" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />
		<path d="M39,42 L38,58" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
		<path d="M38,58 L41,60 L38,63 L35,60 Z" fill="currentColor" />
	</Icon>
);
