import Image from 'next/image';
import heroImage from '../public/assets/roman-kraft-ChSJFIAEoRM-unsplash.jpg';
import heroImage2 from '../public/assets/rabie-madaci-skx1Rn6LW9I-unsplash.jpg';

const Hero = () => {
	return (
		<section className='min-h-screen bg-stone-900 text-amber-50 lg:flex lg:flex-col'>
			<article className='flex flex-col p-4 pt-4 md:w-1/3 lg:w-full'>
				<h1 className='-z-1 font-brand text-8xl uppercase text-amber-500'>
					Curated charm
					<br />
					for your space
					{/* <span>MOM </span>
					<br className='hidden lg:block' />
					<span>& PA&apos;s</span> */}
				</h1>
				<p className='w-full text-xl'>
					An assortment of unique peices collected over the years
				</p>
			</article>
			<figure className='relative flex w-full px-12 pb-12'>
				<Image
					className='object-cover lg:h-[75vh] lg:w-2/3'
					src={heroImage}
					alt='vintage furniture'
				/>
				<Image
					className='absolute right-12 -bottom-12 w-1/3 object-cover'
					src={heroImage2}
					alt='vintage furniture'
				/>
				<figcaption className='w-1/3 p-4 text-xl'>
					We collect many things. From vintage apparel, to haunted furniture.
					Many of our peices have a story to tell; and many don&apos;t, but they
					would look just as charming in a loving home.
				</figcaption>
			</figure>
		</section>
	);
};
export default Hero;
