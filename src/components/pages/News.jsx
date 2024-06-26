// News.jsx
import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

function News() {

  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    axios.get('http://localhost:8080/news')
      .then(response => {
        console.log('Response data:', response.data); // Log the response data
        setNews(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError('Error fetching data: ' + error.message);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div>
      {/* <Navbar /> */}
    <div className='w-full bg-zinc-900 min-h-screen flex flex-col justify-start items-start px-32'>
      <div className='w-full h-20'></div>
      <div className='text-white text-lg'>Feat/ Fraud Types</div>
      <div className='w-full flex flex-col justify-center items-center mt-16 gap-6'>
        <div className='w-44 h-44 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
        <div className='text-white text-3xl font-medium'>Featured Articles</div>
      </div>

      <div className='w-full flex justify-between items-center mt-24'>
        <div className='flex justify-start items-center gap-4'>
          <button type='button' className='bg-black text-white w-fit h-10 rounded-full px-4 py-2 hover:bg-zinc-800'>All Article</button>
          <button type='button' className='bg-black text-white w-fit h-10 rounded-full px-4 py-2 hover:bg-zinc-800'>Scams</button>
          <button type='button' className='bg-black text-white w-fit h-10 rounded-full px-4 py-2 hover:bg-zinc-800'>Phishing</button>
          <button type='button' className='bg-black text-white w-fit h-10 rounded-full px-4 py-2 hover:bg-zinc-800'>Identity Theft</button>
          <button type='button' className='bg-black text-white w-fit h-10 rounded-full px-4 py-2 hover:bg-zinc-800'>Tips & Preventions</button>
        </div>
        <div>{/* is to be added */}</div>
      </div>

      <div className='w-full h-96 bg-zinc-800 rounded-3xl mt-12 flex justify-start items-start px-12 py-8'>
        <div className='w-[40%] h-full'>
        </div>
        <div className='flex-1 flex flex-col items-start justify-between pt-4'>
          <h1 className='text-white text-4xl font-semibold'>Top 5 Cyber Security Tips to Protect Yourself Online</h1>
          <p className='text-white opacity-70 mt-8 text-md'>In this article, you will find expert advice on how to stay safe and protect your personal information while browsing the internet. Implement these 5 practical and easy tips today.</p>
          <div className='flex justify-start items-center mt-32 gap-6'>
            <div className='w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
            <div className='text-white text-lg font-medium'>CyberD</div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-between items-center gap-12'>

        <div className='w-1/2 h-80 bg-zinc-800 rounded-3xl mt-12 flex justify-start items-start px-12 py-8'>
          <div className='w-[40%] h-full bg-bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
          <div className='flex-1 flex flex-col items-start justify-between pt-4'>
            <h1 className='text-white text-3xl font-semibold'>{news[7].title}</h1>
            <p className='text-white opacity-70 mt-8 text-md'>Stay informed about the latest cyber frauds and learn how to protect yourself from becoming a victim. Knowledge is the best defense against online scams.</p>
            <div className='flex justify-start items-center mt-8 gap-6'>
              <div className='w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
              <a href={news[7].url} className='text-white text-md font-medium'>See full Article</a>
            </div>
          </div>
        </div>
        <div className='w-1/2 h-80 bg-zinc-800 rounded-3xl mt-12 flex justify-start items-start px-12 py-8'>
          <div className='w-[40%] h-full bg-bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
          <div className='flex-1 flex flex-col items-start justify-between pt-4'>
            <h1 className='text-white text-3xl font-semibold'>DarkTrace private $5billion scam</h1>
            <p className='text-white opacity-70 mt-8 text-md'>Get insights into various online scams and learn how to recognize and avoid them. Protect your hard-earned money and personal information from cyber criminals.</p>
            <div className='flex justify-start items-center mt-8 gap-6'>
              <div className='w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
              <a href={news[6].url} className='text-white text-md font-medium'>See full Article</a>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full text-center text-white mt-24 text-4xl font-semibold'>Stay Updated with Cyber</div>

      <div className='w-full flex justify-center items-center gap-8 mt-16 '>
        <div className='w-[30%] h-96 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start'>
          <div className='w-full h-[50%] bg-gradient-to-r from-indigo-500 rounded-t-3xl'></div>
          <div className='text-white text-2xl px-4 font-semibold py-2'>{news[0].title}</div>
          <div className='text-white opacity-70 px-4 py-2 text-sm'>{news[0].description}</div>
          <div className='flex justify-start items-center mt-8 gap-6 px-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
              <a href={news[0].url} className='text-white text-md font-medium'>See full Article</a>
            </div>
        </div>
        <div className='w-[30%] h-96 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start'>
          <div className='w-full h-[50%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-3xl'></div>
          <div className='text-white text-2xl px-4 font-semibold py-2'>{news[1].title}</div>
          <div className='text-white opacity-70 px-4 py-2 text-sm'>{news[1].description}</div>
          <div className='flex justify-start items-center mt-8 gap-6 px-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
              <a href={news[1].url} className='text-white text-md font-medium'>See full Article</a>
            </div>
        </div>
        <div className='w-[30%] h-96 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start'>
          <div className='w-full h-[50%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl'></div>
          <div className='text-white text-2xl px-4 font-semibold py-2'>{news[2].title}</div>
          <div className='text-white opacity-70 px-4 py-2 text-sm'>{news[2].description}</div>
          <div className='flex justify-start items-center mt-8 gap-6 px-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
              <a href={news[2].url} className='text-white text-md font-medium'>See full Article</a>
            </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center gap-8 mt-16 '>
        <div className='w-[30%] h-96 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start'>
          <div className='w-full h-[50%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-t-3xl'></div>
          <div className='text-white text-2xl px-4 font-semibold py-2'>{news[3].title}</div>
          <div className='text-white opacity-70 px-4 py-2 text-sm'>{news[3].description}</div>
          <div className='flex justify-start items-center mt-8 gap-6 px-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
<a href={news[3].url} className='text-white text-md font-medium'>See full Article</a>
            </div>
        </div>
        <div className='w-[30%] h-96 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start'>
          <div className='w-full h-[50%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl'></div>
          <div className='text-white text-2xl px-4 font-semibold py-2'>{news[4].title}</div>
          <div className='text-white opacity-70 px-4 py-2 text-sm'>{news[4].description}</div>
          <div className='flex justify-start items-center mt-8 gap-6 px-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
<a href={news[4].url} className='text-white text-md font-medium'>See full Article</a>
            </div>
        </div>
        <div className='w-[30%] h-96 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start'>
          <div className='w-full h-[50%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-3xl'></div>
          <div className='text-white text-2xl px-4 font-semibold py-2'>{news[5].title}</div>
          <div className='text-white opacity-70 px-4 py-2 text-sm'>{news[5].description}</div>
          <div className='flex justify-start items-center mt-8 gap-6 px-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full '></div>
<a href={news[5].url} className='text-white text-md font-medium'>See full Article</a>
            </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center mt-20 mb-12'>
      <button type='button' className='bg-black text-white w-fit h-10 rounded-full px-4 py-2 hover:bg-zinc-800'>Load More</button>
      </div>

      </div>
      {/* <Footer /> */}
    </div>
  )

}

export default News;
