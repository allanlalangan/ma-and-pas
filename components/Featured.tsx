import Link from 'next/link';

const Featured = () => {
	return (
		<section className='flex min-h-[90vh] flex-col bg-teal-900 p-8 text-amber-50'>
			<h2 className='p-2 text-right font-brand text-8xl font-semibold uppercase text-amber-500'>
				Timeless Threads
			</h2>
			<Link
				className='w-fit border-b border-amber-50 border-opacity-0 font-semibold transition hover:border-opacity-100'
				href='/products'
			>
				View All Products
			</Link>
		</section>
	);
};
export default Featured;
