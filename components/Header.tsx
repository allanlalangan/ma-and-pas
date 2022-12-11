
const Header = () => {
  const title: string = "Ma & Pa's"
  return (
    <header className='flex w-full justify-between bg-orange-50 px-2'>
      <h1 className='font-chivo text-3xl font-bold italic'>{title}</h1>
      <nav className=''>
        <h2 className='font-heading text-xl font-semibold italic'>Nav</h2>
        <ul className="flex">
          <li>Products</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
        <button>X</button>
      </nav>

    </header>
  );
};
export default Header;
