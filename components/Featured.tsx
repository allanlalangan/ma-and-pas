import Link from 'next/link';

const Featured = () => {
	return (
		<section className='flex min-h-[90vh] flex-col bg-teal-900 p-8 text-amber-50'>
			<h2 className='p-2 text-right font-brand text-7xl font-semibold uppercase text-amber-500 lg:text-8xl'>
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
