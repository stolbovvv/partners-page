import { AboutSection } from '@/components/AboutSection';
import { BrandSection } from '@/components/BrandSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProductSection } from '@/components/ProductSection';
import { StagesSection } from '@/components/StagesSection';

export const PartnersPage = () => {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<StagesSection />
				<AboutSection />
				<BrandSection />
				<ProductSection />
			</main>
			<Footer />
		</>
	);
};
