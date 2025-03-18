import { Box, Button, Container, Stack, Typography } from '@mui/material';
import heroImage from '@/assets/images/home-banner.svg';

export const HeroSection = () => {
	return (
		<Box component={'section'} py={4}>
			<Container>
				<Stack alignItems={'center'} gap={4}>
					<Box>
						<Typography variant="h1" sx={{ textAlign: 'center' }}>
							Stoking — маркетплейс промышленного оборудования
						</Typography>
						<Typography
							sx={{
								textAlign: 'center',
								margin: '1.25em auto 0 auto',
							}}
						>
							Владеете складом промышленного оборудования или производите его? <br />
							Начни продавать уже сейчас.
						</Typography>
					</Box>
					<Button variant="contained" sx={{ px: 3 }}>
						Стать продавцом на Stoking
					</Button>
					<img
						src={heroImage}
						alt=""
						style={{
							maxWidth: '100%',
						}}
					/>
				</Stack>
			</Container>
		</Box>
	);
};
