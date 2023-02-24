const NewProducts = () => {
	return (
		<section className='flex flex-col bg-stone-900 text-amber-50'>
			<h2 className='font-heading p-2 text-2xl font-semibold'>Latest Finds</h2>
			<ul className='grid h-full grid-cols-12 gap-4 p-4'>
				<li className='col-span-12 flex flex-col rounded bg-stone-800 md:col-span-6 xl:col-span-3'>
					<h3 className='p-2'>Title</h3>
					<p className='mb-4 flex-1 px-4'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo odio
						fugiat a! Facilis.
					</p>
					<figure className='min-h-[50vh] flex-1 rounded-b bg-gradient-to-t from-stone-700 to-stone-800'>
						<figcaption>img</figcaption>
					</figure>
				</li>
				<li className='col-span-12 flex flex-col rounded bg-stone-800 md:col-span-6 xl:col-span-3'>
					<h3 className='p-2'>Title</h3>
					<p className='mb-4 flex-1 px-4'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo odio
						fugiat a! Facilis.
					</p>
					<figure className='min-h-[50vh] flex-1 rounded-b bg-gradient-to-t from-stone-700 to-stone-800'>
						<figcaption>img</figcaption>
					</figure>
				</li>
				<li className='col-span-12 flex flex-col rounded bg-stone-800 md:col-span-6 xl:col-span-3'>
					<h3 className='p-2'>Title</h3>
					<p className='mb-4 flex-1 px-4'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo odio
						fugiat a! Facilis.
					</p>
					<figure className='min-h-[50vh] flex-1 rounded-b bg-gradient-to-t from-stone-700 to-stone-800'>
						<figcaption>img</figcaption>
					</figure>
				</li>
				<li className='col-span-12 flex flex-col rounded bg-stone-800 md:col-span-6 xl:col-span-3'>
					<h3 className='p-2'>Title</h3>
					<p className='mb-4 flex-1 px-4'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo odio
						fugiat a! Facilis.
					</p>
					<figure className='min-h-[50vh] flex-1 rounded-b bg-gradient-to-t from-stone-700 to-stone-800'>
						<figcaption>img</figcaption>
					</figure>
				</li>
			</ul>
		</section>
	);
};
export default NewProducts;
