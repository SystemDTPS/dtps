import React from 'react';

const AboutUs = () => {
  return (
    <div id='about' className='w-screen min-h-screen h-max patternOne px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
      <div className='flex flex-col items-center justify-center w-full h-max pt-4'>
        <h1 className='font-bold text-[24px] sm:text-[28px] text-sky-600 underline underline-offset-8'>About Us</h1>
        <div className='w-full p-6 bg-white shadow-lg rounded-xl mt-4'>
          <p className='text-gray-700 text-base sm:text-lg'>
            <strong>DTPS Product And Services LLP</strong> is a dynamic and innovative company committed to delivering high-quality products and financial solutions. 
            We specialize in <strong>FMCG and Personal Care</strong> products under our brand <strong>SWARNOMOYEE</strong> while also offering <strong>Life Insurance</strong> services. As a <strong>multilevel marketing firm</strong>, 
            we empower individuals with lucrative business opportunities, helping them achieve financial independence and success.
          </p>
          <p className='text-gray-700 text-base sm:text-lg mt-2'>
            In addition, we have another subsidiary, <strong>DTPS Insurance Marketing LLP</strong>, dedicated to providing comprehensive insurance marketing solutions, ensuring financial security for our clients.
          </p>
          <h2 className='mt-4 font-semibold text-lg sm:text-xl text-sky-600'>Our Mission</h2>
          <p className='text-gray-700 text-base sm:text-lg'>
            Our mission is to <strong>enhance lives by providing superior products and financial security</strong>. We aim to create a seamless experience for our customers 
            and business partners through innovation, integrity, and commitment to excellence.
          </p>
          <h2 className='mt-4 font-semibold text-lg sm:text-xl text-sky-600'>What We Offer</h2>
          <ul className='list-disc list-inside text-gray-700 text-base sm:text-lg'>
            <li><strong>FMCG and Personal Care Products</strong>: A wide range of daily essentials designed to improve health and well-being under our brand <strong>SWARNOMOYEE</strong>.</li>
            <li><strong>Life Insurance Solutions</strong>: Secure your future with trusted insurance plans tailored to your needs.</li>
            <li><strong>Multilevel Marketing Opportunities</strong>: A rewarding business model that allows individuals to grow financially through ethical and sustainable networking.</li>
          </ul>
          <h2 className='mt-4 font-semibold text-lg sm:text-xl text-sky-600'>Why Choose DTPS?</h2>
          <ul className='list-disc list-inside text-gray-700 text-base sm:text-lg'>
            <li><strong>Quality Assurance</strong>: Our products meet the highest standards of quality and effectiveness.</li>
            <li><strong>Financial Growth</strong>: We provide lucrative opportunities for individuals to earn and grow.</li>
            <li><strong>Customer-Centric Approach</strong>: Your satisfaction is our top priority.</li>
            <li><strong>Trusted Network</strong>: A robust MLM system that fosters trust, collaboration, and success.</li>
          </ul>
          <h2 className='mt-4 font-semibold text-lg sm:text-xl text-sky-600'>Join Us Today!</h2>
          <p className='text-gray-700 text-base sm:text-lg'>
            Be a part of our growing network and unlock a world of possibilities. Whether you are looking for top-quality products, financial security, or a profitable business opportunity, 
            <strong>DTPS Product And Services LLP</strong> is here to help you succeed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;