const Header = () => {
	const title: string = "Mom & Pa's";
	return (
		<header className="flex w-full flex-col justify-center p-4">
			<h1 className="font-display text-2xl font-bold text-green-600">
				{title}
			</h1>
			<nav className="">
				<section className="m-auto flex justify-center">
					<button className="mr-4">Chairs & Seating</button>
					<button className="mr-4">Kitchen</button>
					<button className="mr-4">Storage</button>
					<button className="mr-4">Electronics</button>
				</section>
				<section className="flex w-full justify-between">
					<button className="rounded-lg border border-amber-100 p-2 px-8 text-orange-50">
						Menu
					</button>
					<button className="rounded-lg border border-amber-100 p-2 px-8 text-orange-50">
						Cart
					</button>
				</section>
			</nav>
		</header>
	);
};
export default Header;
