const Header = () => {
  const title: string = "Ma&Pa's";
  return (
    <header className="flex w-full flex-col justify-center bg-orange-50 p-2">
      <h1 className="font-chivo text-4xl font-bold italic text-orange-900">
        {title}
      </h1>
      <nav className="">
        <section className="flex flex-col">
          <button>Products</button>
          <button>Login</button>
        </section>
        <section className="flex w-full justify-between">
          <button className="rounded bg-stone-800 p-2 text-orange-50">
            Menu
          </button>
          <button className="rounded bg-stone-800 p-2 text-orange-50">
            Cart
          </button>
        </section>
      </nav>
    </header>
  );
};
export default Header;
