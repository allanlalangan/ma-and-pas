const NewArrivals = () => {
  return (
    <section className='h-[50vh] bg-orange-100 flex flex-col'>
      <h2 className='font-heading italic font-semibold text-xl'>
        New Arrivals
      </h2>
      <ul className="h-full grid grid-cols-12 p-4">
        <li className='m-4 border rounded col-span-12 sm:col-span-6 md:col-span-3 border-rose-200'>Product</li>
        <li className='m-4 border rounded col-span-12 sm:col-span-6 md:col-span-3 border-rose-200'>Product</li>
        <li className='m-4 border rounded col-span-12 sm:col-span-6 md:col-span-3 border-rose-200'>Product</li>
        <li className='m-4 border rounded col-span-12 sm:col-span-6 md:col-span-3 border-rose-200'>Product</li>
      </ul>
    </section>
  );
};
export default NewArrivals;
