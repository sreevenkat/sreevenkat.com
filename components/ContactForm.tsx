import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Stack,
  Textarea
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';

const ContactForm = () => {
	return (
		<>
			<form action="https://formcarry.com/s/Y3V7EHDTbb" method="POST">
				<Stack spacing={5}>
					<Heading size="xl">Contact me</Heading>

					<FormControl id="first-name" isRequired>
						<FormLabel>Name</FormLabel>
						<Input placeholder="Name" name="name" />
					</FormControl>

					<FormControl id="email" isRequired>
						<FormLabel>Email</FormLabel>
						<Input placeholder="Email" name="email" />
					</FormControl>

					<FormControl id="message" isRequired>
						<FormLabel>Write me a message</FormLabel>
						<Textarea placeholder="Message" name="message" />
					</FormControl>

					<Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline" type="submit">
						Message
					</Button>
				</Stack>
			</form>
		</>
	);
};

export default ContactForm;
