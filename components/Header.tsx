import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	return (
		<header className='fixed z-10 flex h-[6vh] w-full items-stretch justify-between bg-amber-50'>
			<figure className='flex items-center'>
				<Link
					className='flex items-center justify-center px-2 font-brand text-2xl uppercase text-teal-900'
					href='/'
				>
					Mom & Pa&apos;s
				</Link>
				<button
					onClick={(e) => setMenuIsOpen(!menuIsOpen)}
					className='transition hover:bg-teal-800 hover:text-amber-50 lg:hidden'
				>
					{menuIsOpen ? (
						<MdiClose className='transition-all' />
					) : (
						<MdiMenu className='transition-all' />
					)}
				</button>
			</figure>
			<section
				className={`${
					menuIsOpen ? 'left-0' : '-left-1/3'
				} fixed top-[6vh] flex h-[94vh] w-1/3 flex-col items-center justify-start bg-amber-50 px-1 text-stone-800 transition-all lg:static lg:h-full lg:flex-1 lg:flex-row lg:justify-center`}
			>
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

export function MdiMenu(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1.5rem'
			height='1.5rem'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				fill='currentColor'
				d='M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z'
			></path>
		</svg>
	);
}

export function MdiClose(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1.5rem'
			height='1.5rem'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				fill='currentColor'
				d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
			></path>
		</svg>
	);
}
