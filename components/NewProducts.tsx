import Image from 'next/image';
import Link from 'next/link';
import { products } from '../public/data';

const NewProducts = () => {
	console.log(products);
	return (
		<section className='flex min-h-[90vh] flex-col bg-stone-900 p-8 text-amber-50'>
			<h2 className='p-2 font-brand text-8xl font-semibold uppercase text-amber-500'>
				Latest Finds
			</h2>
			<ul className='grid h-full grid-cols-12 gap-4 p-4'>
				{products?.slice(0, 4).map((product, i) => (
					<li
						key={i}
						className='col-span-12 flex flex-col rounded bg-stone-800 md:col-span-6 xl:col-span-3'
					>
						<h3 className='p-2'>{product.name}</h3>
						<p className='mb-4 flex-1 px-4'>{product.description}</p>
						<Link className='w-fit px-4' href={`/products/${i}`}>
							View Product
						</Link>
						<figure className='min-h-[50vh] flex-1 rounded-b bg-gradient-to-t from-stone-700 to-stone-800'>
							<Image
								className='h-[50vh] object-cover'
								src={product.image}
								alt=''
							/>
						</figure>
					</li>
				))}
			</ul>
		</section>
	);
};
export default NewProducts;
