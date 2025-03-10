import React from 'react';

const products = {
  insurance: [
    { name: 'Pramerica Life Insurance', image: 'https://pramericalife.in/assets/images/brand-logo.svg' },
    { name: 'Digit Life Insurance', image: 'https://www.godigit.com/content/dam/godigit/life/digit-life-logo.svg' },
    { name: 'Bandhan Life Insurance', image: 'https://www.bandhanlife.com/staticassets/logo.svg' },
    { name: 'Hospicash', image: 'https://www.careinsurance.com/images/care_health_insurance_logo.svg' }
  ],
  fmcg: [
    { name: 'Onion Hair Oil', image: 'https://via.placeholder.com/150' },
    { name: 'Hairfall Control Shampoo', image: 'https://via.placeholder.com/150' },
    { name: 'Aloevera Neem Face Wash', image: 'https://via.placeholder.com/150' },
    { name: 'Sunscreen Cream', image: 'https://via.placeholder.com/150' },
    { name: 'Fairness Cream', image: 'https://via.placeholder.com/150' },
    { name: 'Bodywash', image: 'https://via.placeholder.com/150' },
    { name: 'Papaya Facewash', image: 'https://via.placeholder.com/150' },
    { name: 'Aloevera Gel', image: 'https://via.placeholder.com/150' },
    { name: 'Acne Master Cream', image: 'https://via.placeholder.com/150' },
    { name: 'Night Cream', image: 'https://via.placeholder.com/150' },
    { name: 'Soap', image: 'https://via.placeholder.com/150' },
    { name: 'Toothpaste', image: 'https://via.placeholder.com/150' },
    { name: 'Tulsi', image: 'https://via.placeholder.com/150' },
    { name: 'Haldi/Turmeric', image: 'https://via.placeholder.com/150' },
    { name: 'Cumin Seeds - Jeera Powder', image: 'https://via.placeholder.com/150' },
    { name: 'Coriander/Dhania', image: 'https://via.placeholder.com/150' },
    { name: 'Red Chili Powder', image: 'https://via.placeholder.com/150' },
    { name: 'Immunity Booster Kadha', image: 'https://via.placeholder.com/150' },
    { name: 'Garam masala', image: 'https://via.placeholder.com/150' },
    { name: 'Sattu', image: 'https://via.placeholder.com/150' },
    { name: 'Besan -dal Flour ', image: 'https://via.placeholder.com/150' },
    { name: 'Chanchur', image: 'https://via.placeholder.com/150' },
    { name: 'Suji', image: 'https://via.placeholder.com/150' },
    { name: 'Soya bean', image: 'https://via.placeholder.com/150' },
    { name: 'Kismish/Raisins', image: 'https://via.placeholder.com/150' },
    { name: 'Cashew/Kaju', image: 'https://via.placeholder.com/150' },
  ]
};

const Products = () => {
  return (
    <div className='w-screen min-h-screen h-max patternOne px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
      <div className='flex flex-col items-center justify-center w-full h-max pt-4'>
        <h1 className='font-bold text-[24px] sm:text-[28px] text-sky-600 underline underline-offset-8'>Our Products</h1>
        <div className='w-full p-6 bg-white shadow-lg rounded-xl mt-4'>
          <h2 className='font-semibold text-lg sm:text-xl text-sky-600'>Insurance Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4'>
            {products.insurance.map((product, index) => (
              <div key={index} className='bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-between'>
                <img src={product.image} alt={product.name} className='w-40 object-cover rounded-md' />
                <p className='mt-2 text-gray-700 font-medium'>{product.name}</p>
              </div>
            ))}
          </div>
          <h2 className='mt-6 font-semibold text-lg sm:text-xl text-sky-600'>FMCG & Personal Care</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4'>
            {products.fmcg.map((product, index) => (
              <div key={index} className='bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center'>
                <img src={product.image} alt={product.name} className='w-32 h-32 object-cover rounded-md' />
                <p className='mt-2 text-gray-700 font-medium'>{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;