import Link from 'next/link';

const Featured = () => {
	return (
		<section className='flex min-h-[90vh] flex-col bg-teal-900 py-12 px-4 text-amber-50'>
			<h2 className='text-right font-brand text-4xl font-semibold uppercase text-amber-500 md:text-6xl lg:text-8xl'>
				Timeless Threads
			</h2>
			<Link
				className='mx-auto w-fit border-b border-amber-50 border-opacity-0 text-center font-semibold transition hover:border-opacity-100'
				href='/products'
			>
				View All Products
			</Link>
		</section>
	);
};
export default Featured;
