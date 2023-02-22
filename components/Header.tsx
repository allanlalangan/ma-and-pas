import Link from 'next/link';

const Header = () => {
	const title = '';
	return (
		<header className='flex w-full justify-center bg-amber-50'>
			<nav className='flex w-full items-center justify-evenly'>
				<section className='flex w-full justify-start px-1 text-stone-800'>
					<Link href='/' className='mr-4'>
						Chairs & Seating
					</Link>
					<Link href='/' className='mr-4'>
						Kitchen
					</Link>
					<Link href='/' className='mr-4'>
						Storage
					</Link>
					<Link href='/' className='mr-4'>
						Electronics
					</Link>
				</section>
				<section className='flex justify-evenly'>
					<button className='border-b-2 border-stone-900 p-2 px-8 text-stone-800'>
						Cart
					</button>
					<button className='border-b-2 border-stone-800 p-2 px-8 text-stone-800'>
						Login
					</button>
				</section>
			</nav>
		</header>
	);
};
export default Header;
