import Image from 'next/image';
import heroImage from '../public/assets/rabie-madaci-skx1Rn6LW9I-unsplash.jpg';

const Hero = () => {
	return (
		<section className='bg-amber-50 text-stone-800 lg:flex'>
			<article className='w-1/2'>
				<h1 className='font-display text-8xl'>
					MOM
					<br />& PA&apos;s
				</h1>
				<p className='w-1/2'>
					an assortment of unique peices collected over the years
				</p>
			</article>
			<figure className='flex flex-row-reverse lg:w-1/2'>
				<Image
					className='h-96 object-cover lg:h-[100vh]'
					src={heroImage}
					alt='vintage furniture'
				/>
			</figure>
		</section>
	);
};
export default Hero;
