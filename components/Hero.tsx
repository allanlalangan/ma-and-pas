import Image from 'next/image';
import heroImage from '../public/assets/roman-kraft-ChSJFIAEoRM-unsplash.jpg';

const Hero = () => {
	return (
		<section className='min-h-screen lg:flex'>
			<article className='flex flex-col pt-4 lg:w-1/3'>
				<h1 className='-z-10 font-brand text-8xl text-teal-900'>
					<span>MOM </span>
					<br className='hidden lg:block' />
					<span>& PA&apos;s</span>
				</h1>
				<p className='w-full text-xl'>
					an assortment of unique peices collected over the years
				</p>
			</article>
			<figure className='lg:w-2/3'>
				<Image
					className='object-cover lg:h-screen'
					src={heroImage}
					alt='vintage furniture'
				/>
			</figure>
		</section>
	);
};
export default Hero;
