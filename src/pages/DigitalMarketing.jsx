import React from 'react';
import BackButton from '../Components/BackButton';
import Digital from '../assets/Digital.webp';
import Button from '../Components/common/Button';
import { useNavigate } from 'react-router-dom';

function DigitalMarketing() {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 lg:px-32 py-10 bg-gray-50">
      <div className="mt-20 mb-6">
        <BackButton />
      </div>
      
      <div className="text-center text-xl lg:text-4xl font-bold mb-4 lg:mb-12">
        Digital Marketing <span className="text-blue-600">& SEO</span>
      </div>

      <div className='flex justify-center'>
        <img 
          src={Digital} 
          alt="Digital Marketing" 
          className='mb-4 lg:mb-12 rounded-lg shadow-lg w-full max-w-3xl object-cover'
        />
      </div>
      
      <h2 className='text-lg lg:text-3xl  font-bold text-center text-gray-800 mb-4 lg:mb-8'>
        Understanding <span className='text-blue-600'>Digital Marketing</span>
      </h2>

      <div className='mx-auto text-sm lg:text-lg text-gray-700 space-y-6 leading-relaxed'>
        <p>
          Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands. 
          In today’s technology-driven world, understanding the scope and components of digital marketing is crucial for businesses aiming to enhance their online presence.
          The key components include search engine optimization (SEO), content marketing, social media marketing, email marketing, and pay-per-click (PPC) advertising.
        </p>

        <p>
          <strong className='text-blue-600'>SEO</strong> is fundamental as it involves optimizing a website to rank higher in search engine results, increasing organic traffic. 
          Through targeted keywords, improved site structure, and quality backlinks, businesses can enhance their online visibility.
        </p>

        <p>
          <strong className='text-blue-600'>Content marketing</strong> focuses on creating and distributing valuable content to attract and engage a target audience. 
          High-quality content informs potential customers while establishing authority and trust.
        </p>

        <p>
          <strong className='text-blue-600'>Social media marketing</strong> leverages platforms like Facebook, Twitter, Instagram, and LinkedIn to engage audiences, share content, 
          and run targeted ad campaigns.
        </p>

        <p>
          <strong className='text-blue-600'>Email marketing</strong> involves sending personalized messages and newsletters to customers, fostering direct communication and brand loyalty.
        </p>

        <p>
          <strong className='text-blue-600'>PPC advertising</strong> operates on a pay-per-click model, providing a cost-effective way to drive traffic and measure campaign success.
          A well-integrated digital marketing strategy can help businesses grow their audience, boost conversions, and build strong customer relationships.
        </p>
        

        <p className="flex justify-center"><Button onClick={() => navigate('/form') }>Get Service</Button></p>

      </div>
      
    </div>
  );
}

export default DigitalMarketing;
