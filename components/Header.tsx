import Link from 'next/link';

const Header = () => {
	const title = '';
	return (
		<header className='fixed z-10 flex min-h-[6vh] w-full items-stretch justify-between bg-amber-50'>
			<Link
				className='flex items-center justify-center px-2 font-brand text-2xl uppercase text-teal-900'
				href='/'
			>
				Mom & Pa&apos;s
			</Link>

			<section className='flex items-center justify-center px-1 text-stone-800'>
				<Link href='/' className='mx-2'>
					Chairs & Seating
				</Link>
				<Link href='/' className='mx-2'>
					Kitchen
				</Link>
				<Link href='/' className='mx-2'>
					Storage
				</Link>
				<Link href='/' className='mx-2'>
					Electronics
				</Link>
			</section>
			<section className='flex justify-evenly border-b-2 border-stone-900'>
				<button className='p-2 px-8 text-stone-800'>Cart</button>
				<button className='p-2 px-8 text-stone-800'>Login</button>
			</section>
		</header>
	);
};
export default Header;
