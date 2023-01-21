import Link from 'next/link';

export function SponsorSection() {
  return (
    <section
      id='donations'
      className='bg-gradient-to-b to-chaos-black from-cod-gray'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-32 text-center'>
        <h1 className='text-dusty-gray-200 text-3xl mb-4'>
          Want to help Game Development community?
        </h1>
        <h1 className='text-white font-bold text-5xl mb-3'>
          Become our sponsor!
        </h1>
        <p className='text-dusty-gray mb-16'>
          Allow us to build amazing product by donating
        </p>
        <Link
          href='TODO:ourrpatreon'
          className='border border-supernova text-supernova hover:text-chaos-black transition-colors bg-transparent hover:bg-supernova py-2 px-7 rounded-md font-bold'
        >
          Our Patreon
        </Link>
      </div>
    </section>
  );
}
