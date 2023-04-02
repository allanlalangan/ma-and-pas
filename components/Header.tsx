import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	return (
		<header className='fixed z-10 flex h-[6vh] w-full items-stretch justify-between bg-amber-50 px-4'>
			<figure className='flex items-center'>
				<Link
					className='flex items-center justify-center font-brand text-2xl uppercase text-teal-900'
					href='/'
				>
					Mom & Pa&apos;s
				</Link>
			</figure>
			<section
				className={`${
					menuIsOpen ? 'right-0' : '-right-1/3'
				} fixed top-[6vh] flex h-[94vh] w-1/3 flex-col items-center justify-evenly bg-amber-50 px-1 text-stone-800 shadow-xl transition-all lg:static lg:h-full lg:flex-1 lg:flex-row lg:justify-center lg:shadow-none`}
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
			<section className='flex items-center justify-evenly text-teal-900'>
				<button className='flex items-center rounded-l-md border-y-2 border-r border-l-2 border-teal-900 p-2 px-4 transition hover:bg-teal-900 hover:text-amber-50'>
					<MdiCart />
				</button>
				<button className='flex items-center border-y-2 border-l border-r border-teal-900 p-2 px-4 transition hover:bg-teal-900 hover:text-amber-50 lg:rounded-r-md lg:border-r-2'>
					<MdiLogin />
				</button>
				<button
					onClick={(e) => setMenuIsOpen(!menuIsOpen)}
					className='flex items-center rounded-r-md border-y-2 border-l border-r-2 border-teal-900 p-2 px-4 transition hover:bg-teal-900 hover:text-amber-50 lg:hidden'
				>
					{menuIsOpen ? <MdiClose /> : <MdiMenu />}
				</button>
			</section>
		</header>
	);
};
export default Header;

function MdiMenu(props: SVGProps<SVGSVGElement>) {
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

function MdiClose(props: SVGProps<SVGSVGElement>) {
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

function MdiCart(props: SVGProps<SVGSVGElement>) {
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
				d='M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z'
			></path>
		</svg>
	);
}

function MdiLogin(props: SVGProps<SVGSVGElement>) {
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
				d='M10 17v-3H3v-4h7V7l5 5l-5 5m0-15h9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2h2v2h9V4h-9v2H8V4a2 2 0 0 1 2-2Z'
			></path>
		</svg>
	);
}
