import Image from 'next/image';
import heroImage from '../public/assets/roman-kraft-ChSJFIAEoRM-unsplash.jpg';
import heroImage2 from '../public/assets/rabie-madaci-skx1Rn6LW9I-unsplash.jpg';

const Hero = () => {
	return (
		<section className='relative min-h-[94vh] bg-amber-50 py-4 lg:flex lg:flex-col lg:pb-16'>
			<article className='flex w-full flex-col p-4 pt-4'>
				<h1 className='-z-1 font-brand text-4xl uppercase text-teal-900 md:text-6xl lg:text-8xl'>
					Curated charm{` `}
					<br className=' block' />
					for your space
					{/* <span>MOM </span>
					<br className='hidden lg:block' />
					<span>& PA&apos;s</span> */}
				</h1>
				<p className='w-full text-xl'>
					An assortment of unique peices collected over the years
				</p>
			</article>
			<figure className='relative flex w-full flex-col px-4 pb-12 md:px-8 lg:flex-row lg:px-12 lg:pb-8'>
				<Image
					className='h-[50vh] w-3/4 object-cover shadow-md sm:h-[50vh] lg:w-5/6'
					src={heroImage}
					alt='vintage furniture'
				/>
				<Image
					className='absolute right-4 bottom-0 w-1/2 object-cover shadow-lg sm:right-4 sm:w-1/2 md:right-8 md:block lg:right-12 lg:-bottom-12 lg:w-1/3'
					src={heroImage2}
					alt='vintage furniture'
				/>
			</figure>
			<p className='w-full p-4 text-xl sm:w-2/3 sm:py-4 md:px-8 lg:w-1/2 lg:py-0 lg:px-8'>
				We collect many things. From vintage apparel, to haunted furniture. Many
				of our peices have a story to tell; and many don&apos;t, but they would
				look just as charming in a loving home.
			</p>
		</section>
	);
};
export default Hero;
