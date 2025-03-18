import IconCart from '@/assets/icons/icon-cart.svg?react';
import IconUser from '@/assets/icons/icon-user.svg?react';
import IconPhone from '@/assets/icons/icon-phone.svg?react';
import IconCompare from '@/assets/icons/icon-compare.svg?react';
import IconFavorite from '@/assets/icons/icon-favorite.svg?react';
import IconHome from '@/assets/icons/icon-home.svg?react';
import {
	AppBar,
	Box,
	Breadcrumbs,
	Button,
	Container,
	Divider,
	IconButton,
	InputAdornment,
	Link,
	Stack,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { Search, Menu } from '@mui/icons-material';

export const Header = () => {
	const theme = useTheme();

	return (
		<AppBar position="sticky" color="inherit" style={{ boxShadow: 'none' }}>
			<Box component={'header'} position={'sticky'} py={3}>
				<Container>
					<Stack
						direction={{
							sx: 'column',
							md: 'row',
						}}
						gap={3}
						alignItems={{
							sx: 'stretch',
							md: 'center',
						}}
					>
						<Typography variant="h1" textAlign={'center'}>
							Stoking
						</Typography>
						<Button
							variant="contained"
							startIcon={<Menu />}
							sx={{
								display: {
									xs: 'none',
									md: 'flex',
								},
							}}
						>
							Каталог
						</Button>
						<TextField
							id="input-with-sx"
							label="Поиск по товарам"
							variant="outlined"
							size="small"
							sx={{
								flex: '1 1 auto',
							}}
							slotProps={{
								input: {
									endAdornment: (
										<InputAdornment position="end">
											<Search opacity={0.5} />
										</InputAdornment>
									),
								},
							}}
						/>

						<Link
							href="tel:88009007060"
							sx={{
								display: {
									xs: 'none',
									md: 'flex',
								},
								alignItems: 'center',
								gap: theme.spacing(1),
							}}
						>
							<IconPhone style={{ width: 20, height: 20 }} />
							<Typography
								alignContent={'center'}
								variant="body2"
								color="textSecondary"
								sx={{
									display: { sm: 'none', md: 'block' },
								}}
							>
								8 (800) 500-90-52
							</Typography>
						</Link>
						<Box
							sx={{
								display: {
									xs: 'none',
									md: 'block',
								},
							}}
						>
							<IconButton>
								<IconUser style={{ width: 20, height: 20 }} />
							</IconButton>
							<IconButton>
								<IconCompare style={{ width: 20, height: 20 }} />
							</IconButton>
							<IconButton>
								<IconFavorite style={{ width: 20, height: 20 }} />
							</IconButton>
							<IconButton>
								<IconCart style={{ width: 20, height: 20 }} />
							</IconButton>
						</Box>
					</Stack>
					<Stack direction={'row'} justifyContent={'space-between'} gap={2} sx={{ marginBlockStart: 2 }}>
						<Breadcrumbs>
							<Link href="#" underline="none">
								<IconHome
									style={{
										width: 14,
										height: 14,
										stroke: 'currentColor',
									}}
								/>
							</Link>

							<Link href="#" underline="none">
								Сотрудничество Stoking
							</Link>
						</Breadcrumbs>
						<Stack></Stack>
					</Stack>
				</Container>
			</Box>
			<Divider />
		</AppBar>
	);
};
