import Image from 'next/image';
import heroImage from '../public/assets/roman-kraft-ChSJFIAEoRM-unsplash.jpg';
import heroImage2 from '../public/assets/rabie-madaci-skx1Rn6LW9I-unsplash.jpg';

const Hero = () => {
	return (
		<section className='relative min-h-screen bg-stone-900 text-amber-50 lg:flex lg:flex-col'>
			<article className='flex w-full flex-col p-4 pt-4'>
				<h1 className='-z-1 font-brand text-7xl uppercase text-amber-500 lg:text-8xl'>
					Curated charm{` `}
					<br className='hidden lg:block' />
					for your space
					{/* <span>MOM </span>
					<br className='hidden lg:block' />
					<span>& PA&apos;s</span> */}
				</h1>
				<p className='w-full text-xl'>
					An assortment of unique peices collected over the years
				</p>
			</article>
			<figure className='flex w-full flex-col pb-12 md:px-12 lg:flex-row'>
				<Image
					className='h-[50vh] object-cover lg:h-[75vh] lg:w-2/3'
					src={heroImage}
					alt='vintage furniture'
				/>
				<Image
					className='absolute right-12 -bottom-8 hidden object-cover shadow-md md:block md:w-1/2 lg:-bottom-12 lg:w-1/3'
					src={heroImage2}
					alt='vintage furniture'
				/>
				<figcaption className='w-full p-4 text-xl sm:py-4 md:w-1/2 md:px-0 lg:w-1/3 lg:py-0 lg:px-4'>
					We collect many things. From vintage apparel, to haunted furniture.
					Many of our peices have a story to tell; and many don&apos;t, but they
					would look just as charming in a loving home.
				</figcaption>
			</figure>
		</section>
	);
};
export default Hero;
