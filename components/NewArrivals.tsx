const NewArrivals = () => {
	return (
		<section className="flex h-[50vh] flex-col">
			<h2 className="p-2 font-heading text-xl font-semibold">
				Our Latest Finds
			</h2>
			<ul className="grid h-full grid-cols-12 p-4">
				<li className="col-span-12 m-4 rounded border border-amber-200 sm:col-span-6 md:col-span-3">
					<h3 className="p-2">Title</h3>
				</li>
				<li className="col-span-12 m-4 rounded border border-amber-200 sm:col-span-6 md:col-span-3">
					<h3 className="p-2">Title</h3>
				</li>
				<li className="col-span-12 m-4 rounded border border-amber-200 sm:col-span-6 md:col-span-3">
					<h3 className="p-2">Title</h3>
				</li>
				<li className="col-span-12 m-4 rounded border border-amber-200 sm:col-span-6 md:col-span-3">
					<h3 className="p-2">Title</h3>
				</li>
			</ul>
		</section>
	);
};
export default NewArrivals;
