import Link from 'next/link';

const Header = () => {
	const title = '';
	return (
		<header className='fixed flex min-h-[10vh] w-full flex-col justify-end bg-amber-50'>
			<Link
				className='w-fit items-center font-brand text-2xl text-teal-900'
				href='/'
			>
				Home
			</Link>
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
				<section className='flex justify-evenly border-b-2 border-stone-900'>
					<button className='p-2 px-8 text-stone-800'>Cart</button>
					<button className='p-2 px-8 text-stone-800'>Login</button>
				</section>
			</nav>
		</header>
	);
};
export default Header;
