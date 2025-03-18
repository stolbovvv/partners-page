import { Box, Card, Container, Stack, Typography } from '@mui/material';
import IconBox from '@/assets/icons/icon-box.svg?react';

const ProductCard = () => {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				padding: 1,
				width: 180,
				boxShadow: 2,
				marginLeft: {
					xs: '10px',
					md: '-80px',
				},
			}}
		>
			<img
				src="/images/product-1.png"
				alt="Картинка"
				style={{
					height: 120,
					width: '100%',
					objectFit: 'contain',
				}}
			/>
			<Typography variant="h3">S21A Пластина AiSi 316 0,5 mm TK 1234</Typography>
			<ul
				style={{
					padding: 0,
					margin: 0,
					listStyle: 'none',
				}}
			>
				<li style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
					<Typography variant="caption" color="textSecondary">
						Артикул:
					</Typography>
					<Typography variant="caption">S21A ПЛАСТИНА</Typography>
				</li>
			</ul>

			<Typography variant="h2" color="primary">
				1 875 ₽
			</Typography>
		</Card>
	);
};

export const ProductSection = () => {
	return (
		<Box component={'section'} py={8}>
			<Container>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							sm: '1fr',
							md: '1fr 1fr',
						},
						alignItems: 'center',
						gap: 4,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: {
								xs: 'center',
								md: 'start',
							},
							textAlign: {
								xs: 'center',
								md: 'start',
							},
						}}
					>
						<Typography variant="h2" color="primary">
							<IconBox /> 3465 товаров
						</Typography>
						<Typography marginBlockStart={'0.67em'}>
							На нашем сайте, в наличии с актуальными ценами.
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							rowGap: 1,
							columnGap: {
								xs: 0,
								md: 1,
							},
							justifyContent: {
								xs: 'center',
								md: 'flex-end',
							},
							flex: '1 1 auto',
						}}
					>
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
