import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material';

const footerLinks: { text: string; href: string }[] = [
	{ href: '#', text: 'Сотрудничество' },
	{ href: '#', text: 'Доставка и возврат' },
	{ href: '#', text: 'Оплата' },
	{ href: '#', text: 'Контакты' },
	{ href: '#', text: 'Публичная оферта' },
	{ href: '#', text: 'Политика конфиденциальности' },
];

export const Footer = () => {
	return (
		<Box component={'footer'}>
			<Divider />
			<Container>
				<Box display={'flex'} flexDirection={'column'} rowGap={2} py={4}>
					<Stack direction={'row'} justifyContent={'center'} rowGap={1} columnGap={2} flexWrap={'wrap'}>
						{footerLinks.map(({ text, href }, index) => (
							<Link key={index} href={href} variant="body2" display={'flex'}>
								{text}
							</Link>
						))}
					</Stack>
					<Stack direction={'row'} justifyContent={'center'} rowGap={1} columnGap={2}>
						<Typography variant="caption">ООО «Хитинвест» by Spaceport 2022</Typography>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
};
