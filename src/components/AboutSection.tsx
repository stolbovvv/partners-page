import { Box, Container, Stack, Typography } from '@mui/material';
import aboutImage from '@/assets/images/about-banner.png';

export const AboutSection = () => {
	return (
		<Box component={'section'} py={4}>
			<Box
				sx={{
					paddingBlock: 5,
					background: '#F8F8F8',
				}}
			>
				<Container maxWidth={'md'}>
					<Stack direction={'row'} gap={4}>
						<Box
							sx={{
								display: 'flex',
								flex: '1 1 auto',
								flexDirection: 'column',
								paddingBlock: 2,
								gap: '0.67em',
							}}
						>
							<Typography>
								<strong>Stoking</strong> — маркетплейс инженерно-промышленного оборудования.
							</Typography>
							<Typography>
								Рынок промышленного оборудования изменяется. Появляются новые, качественные бренды,
								формируются больше склады, меняется политика компаний, ускоряются процессы логистики
								оборудования.
							</Typography>
							<Typography>
								Стокинг это более 50 инженеров, создавших сервис-проводник в сегменте промышленного
								оборудования.
							</Typography>
							<Typography>Мы хотим знать что вы производите, продаете и донести это миру.</Typography>
						</Box>
						<Box
							sx={{
								position: 'relative',
								display: {
									xs: 'none',
									sm: 'none',
									md: 'block',
								},
								width: '200px',
								flex: '0 0 auto',
							}}
						>
							<img
								src={aboutImage}
								alt=""
								style={{
									position: 'absolute',
									width: '100%',
									top: '50%',
									transform: 'translateY(-50%)',
								}}
							/>
						</Box>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};
