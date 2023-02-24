import Image from 'next/image';
import heroImage from '../public/assets/rabie-madaci-skx1Rn6LW9I-unsplash.jpg';

const Hero = () => {
	return (
		<section className='lg:flex'>
			<article className='mt-4 lg:w-1/3'>
				<h1 className='font-brand text-8xl text-teal-900'>
					MOM{` `}
					<br className='hidden lg:block' />& PA&apos;s
				</h1>
				<p className='w-full text-xl'>
					an assortment of unique peices collected over the years
				</p>
			</article>
			<figure className='lg:w-2/3'>
				<Image
					className='h-96 object-cover lg:h-[85vh]'
					src={heroImage}
					alt='vintage furniture'
				/>
			</figure>
		</section>
	);
};
export default Hero;
