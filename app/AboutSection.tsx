export function AboutSection() {
  return (
    <section
      id='about'
      className='bg-gradient-to-b from-chaos-black to-cod-gray overflow-hidden'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20'>
        <h1 className='text-dusty-gray text-base mb-5 md:mb-2'>About</h1>
        <div className='flex flex-col-reverse gap-10 md:gap-20 justify-between md:flex-row mb-7 md:mb-16'>
          <div className='flex items-end'>
            <h2 className='text-white text-4xl'>Project Objectives</h2>
          </div>
          <div>
            <h3 className='text-white font-bold text-lg mb-3'>
              What is Nocturne?
            </h3>
            <p className='text-base text-dusty-gray'>
              We create modern solutions and trends prevailing on the global
              market. We give satisfaction to our recipients.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='relative bg-transparent p-10 rounded-lg border border-dusty-gray-800'>
            <p className='absolute -top-3 right-5 md:-top-10 md:-right-10 lg:-top-14 lg:-right-12 text-supernova opacity-10 text-[100px] md:text-[150px] lg:text-[200px]'>
              O1
            </p>
            <h2 className='text-white text-2xl my-5'>Cooperations</h2>
            <p className='text-dusty-gray text-base'>
              We are introducing new products in our department - a paid
              subscription that gives access to our special departments on the
              website.
            </p>
          </div>
          <div className='relative bg-transparent p-10 rounded-lg'>
            <p className='absolute -top-3 right-5 md:top-auto md:-bottom-20 md:-right-5 lg:-bottom-32 lg:-right-10 text-transparent opacity-10 text-[100px] md:text-[150px] lg:text-[200px] text-stroke-supernova'>
              O2
            </p>
            <h2 className='text-white text-2xl my-5'>Premium</h2>
            <p className='text-dusty-gray text-base'>
              We have a specially dedicated system for the use of modern
              technology and we are introducing a monthly subscription to
              Premium accounts.
            </p>
          </div>
          <div className='relative bg-chaos-black p-10 rounded-lg'>
            <p className='absolute -top-3 right-5 md:-top-24 md:-right-7 lg:-top-32 lg:-right-10 text-supernova opacity-40 text-[100px] md:text-[150px] lg:text-[200px]'>
              O3
            </p>
            <h2 className='text-white text-2xl my-5'>Support</h2>
            <p className='text-dusty-gray text-base'>
              Quick contact with representatives and priority repair services.
              We guarantee a quick solution to problems for customers who have a
              Premium account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
