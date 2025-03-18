import { useFetch } from '@/hooks/useFetch';
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import IconBrand from '@/assets/icons/icon-brand.svg?react';

interface IBrand {
	items: {
		id: number;
		name: string;
		slug: string;
		thumbnail: {
			id: number;
			date_create: Date;
			path: string;
			name: string;
			sizes: {
				name: string;
				width: number;
				height: number;
				path: string;
			}[];
		};
	}[];
}

export const BrandSection = () => {
	const { data, isError, isLoading } = useFetch<IBrand>(
		'https://api.stoking.ru/v1/brands?selection[filter]=[%7B%22id%22:%22used%22,%22value%22:1%7D]&expand=thumbnail.sizes&fields=id,name,slug,thumbnail.*&per-page=36&page=1&sort=-countDeal',
	);

	const brands = () => {
		if (isLoading) {
			return <Typography>Загружаем бренды</Typography>;
		}
		if (isError && !isLoading) {
			return <Typography>Произошла ошибка при загрузке данных</Typography>;
		}

		if (data && !isError && !isLoading) {
			return data.items.map((item) => (
				<Card
					key={item.id}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '120px',
						borderRadius: '8px',
						boxShadow: 2,
						maxWidth: '100%',
						overflow: 'hidden',
						padding: 2,
					}}
				>
					<img
						src={item.thumbnail.path}
						alt={item.thumbnail.name}
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'contain',
						}}
					/>
				</Card>
			));
		}
	};

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
							<IconBrand /> 91 бренд
						</Typography>
						<Typography marginBlockStart={'0.67em'}>
							Официальный дилер мировых брендов-производителей.
						</Typography>
						<Button
							variant="contained"
							sx={{
								marginBlockStart: 2,
							}}
						>
							Стать продавцом на Stoking
						</Button>
					</Box>
					<Box
						sx={{
							overflow: 'hidden',
							height: '500px',
						}}
					>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr 1fr',
									sm: '1fr 1fr 1fr',
								},
								pointerEvents: 'none',
								overflow: 'hidden',
								gap: '10px',
								padding: '10px',
								animation: 'scroll 15s linear infinite alternate',
								'@keyframes scroll': {
									'0%': { transform: 'translateY(0)' },
									'100%': { transform: 'translateY(calc(-100% + 500px))' },
								},
							}}
						>
							{brands()}
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
