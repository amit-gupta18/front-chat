import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";

const JoinCreateChat = () => {
        return (
                <div>
                        <div className='min-h-screen flex items-center justify-center'>
                                <div className='p-4 w-full max-w-md rounded flex flex-col gap-2 border-1 border-gray-400 dark:bg-gray-800 dark:text-white bg-white text-black shadow-lg'>
                                        <h1 className='rounded-xl text-2xl font-semibold p-2 flex items-center gap-2'>
                                                <IoChatbubbleEllipses />
                                                Join Room / Create Room ...
                                        </h1>
                                        <div className='flex flex-col justify-between  pb-2 w-full'>
                                                <label htmlFor="name" className=' w-max font-medium'>
                                                        Your Name
                                                </label>
                                                <input type="text" id='name' placeholder='Enter your name' className='mt-2 p-2 dark:bg-gray-600 dark:border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                                        </div>
                                        <div className='flex flex-col justify-between pt-2 w-full'>
                                                <label htmlFor="roomId" className=' w-max font-medium'>
                                                        Enter Room Id :
                                                </label>
                                                <input type="text" id='roomId' placeholder='Enter room id' className='mt-2 p-2 dark:bg-gray-600 dark:border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                                        </div>
                                        <div className='flex justify-around items-center mt-4'>
                                                <button className='bg-blue-500 text-white rounded-full px-4 py-2 cursor-pointer dark:bg-red-400'>Join Room </button>
                                                <button className='bg-green-500 text-white cursor-pointer rounded-full px-4 py-2'>Create Room </button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default JoinCreateChat