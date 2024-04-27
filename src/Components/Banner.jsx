import React from 'react'
import banner from '../assets/Banners.jpg'

const Banner = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
            <div className="w-full md:w-1/2 order-2 md:order-1 md:mt-12">
                <div className="space-y-12 mt-11 md:mt-1">
                    <h1 className='text-3xl font-bold '>Hello, Welcomes Here To Build Something <span className='text-pink-500'>New Energy Everyday!!!</span></h1>
                </div>
                <div className="text-md md:text-md mt-4 md:mt-11">
                    <p> Veritatis, temporibus. Asperiores iusto ab accusantium voluptates praesentium eveniet aliquid numquam dicta vero vitae, facere animi aut, inventore, suscipit perspiciatis tempore nobis?</p>
                    <label className="input input-bordered flex items-center gap-2 mt-4 md:mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow " placeholder="Email" />
                    </label>
                    <button className="btn btn-secondary mt-3 md:">Subscribe</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 ">
                <img className='w-92 h-92' src={banner} alt="banner" />
            </div>
        </div>
    )
}

export default Banner