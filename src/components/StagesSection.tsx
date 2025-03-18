import { Box, Container, Stack, Typography } from '@mui/material';

const steps: { title: string; descr: string; value: string }[] = [
	{
		title: 'Свяжитесь с нами',
		descr: 'Оставьте заявку в форме обратной связи. В кротчайшее сроки наши специалисты свяжутся с вами.',
		value: '33%',
	},
	{
		title: 'Предоставьте остатки',
		descr: 'Отправьте нам данные о наличии товара и цены для продажи, в любой удобной для вас форме. Техническую интеграцию больших объемов товаров берем на себя.',
		value: '66%',
	},
	{
		title: 'Обновляйте остатки',
		descr: 'Поддерживайте остатки и стоимости в актуальном виде и все продажи будут вашими. Мы об этом позаботимся!',
		value: '100%',
	},
];

export const StagesSection = () => {
	return (
		<Box component={'section'} py={4}>
			<Container>
				<Stack alignItems={'center'} gap={4}>
					<Typography variant="h2" sx={{ textAlign: 'center' }}>
						Этапы работы
					</Typography>
					<Stack
						direction={'row'}
						justifyContent={'space-evenly'}
						alignItems={'center'}
						flexWrap={'wrap'}
						gap={5}
					>
						{steps.map(({ title, descr, value }, index) => (
							<Stack
								key={index}
								direction={'column'}
								alignItems={'center'}
								gap={2}
								width={'min(280px, 100%)'}
							>
								<Box
									sx={{
										backgroundImage: `
											conic-gradient(from 0deg at 50% 50%, #FF0000 0%, #FF0000 ${value}, #FEDEC7 ${value}, #FEDEC7 100%);`,
										width: 56,
										height: 56,
										padding: '4px',
										borderRadius: '50%',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											padding: '4px',
											width: '100%',
											height: '100%',
											borderRadius: '50%',
											background: '#FEDEC7',
										}}
									>
										<Typography variant="caption" fontWeight={700} color="primary">
											Шаг {index + 1}
										</Typography>
									</Box>
								</Box>
								<Typography variant="h3">{title}</Typography>
								<Typography variant="body2" textAlign={'center'}>
									{descr}
								</Typography>
							</Stack>
						))}
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};
