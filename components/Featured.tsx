import Link from 'next/link';

const Featured = () => {
	return (
		<section className='h-[50vh] p-2'>
			<h2 className='font-heading text-2xl font-semibold'>Featured</h2>
			<Link
				className='border-b border-stone-900 border-opacity-0 font-semibold transition hover:border-b hover:border-opacity-100'
				href='/products'
			>
				View More
			</Link>
		</section>
	);
};
export default Featured;
