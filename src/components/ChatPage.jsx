import React, { useRef, useState, useEffect } from 'react'
import { MdAttachFile, MdSend } from 'react-icons/md'


const ChatPage = () => {

    const [messages, setMessages] = useState([
        {
            content: 'Hello, how are you?',
            sender: 'Optimus Prime',
            timestamp: new Date().toISOString()
        },
        {
            content: 'I am fine,',
            sender: 'Bumblebee',
            timestamp: new Date().toISOString()

        },
        {
            content: 'Hello, how are you?',
            sender: 'Optimus Prime',
            timestamp: new Date().toISOString()
        },
        {
            content: 'Hello, how are you?',
            sender: 'Bumblebee',
            timestamp: new Date().toISOString()
        },
        {
            content: 'Hello, how are you?',
            sender: 'Optimus Prime',
            timestamp: new Date().toISOString()
        },
        {
            content: 'Hello, how are you?',
            sender: 'Bumblebee',
            timestamp: new Date().toISOString()
        }
    ]);
    const [input, setInput] = useState('');
    const chatBoxRef = useRef(null);
    const inputRef = useRef(null);
    const [stompClient, setStompClient] = useState(null);
    const [roomId, setRoomId] = useState(''); // Assuming roomId is set somewhere in your app
    const [currentUser, setCurrentUser] = useState('Optimus Prime'); // Assuming currentUser is set somewhere in your app

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div className='h-screen flex flex-col min-h-0'>
            <header className='flex items-center justify-around bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-4 z-10'>
                {/* Room name container */}
                <div>
                    <h1 className='text-xl font-semibold'>Room  : <span>Family Room</span></h1>
                </div>

                {/* Username container */}
                <div>
                    <h1 className='text-xl font-semibold'>User : <span>Optimus Prime</span></h1>
                </div>
            </header>
            {/* Chat Messages Container */}
            <div
                ref={chatBoxRef}
                className='flex-1 w-2/3 flex flex-col dark:bg-slate-600 mx-auto rounded-md overflow-y-auto scroll-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 dark:scrollbar-thumb-blue-400 dark:scrollbar-track-gray-700'
                style={{ marginBottom: '88px', marginTop: '20px' }} // Adjust these values to match your header/footer heights
            >
                {messages.map((message, index) => (
                    <div
                        className={`flex items-start gap-2 ${message.sender === currentUser ? 'justify-end' : 'justify-start'}`}
                        key={index}
                    >
                        <div
                            className={`p-4 m-2 max-w-xs flex rounded-lg ${message.sender === currentUser
                                ? 'bg-blue-500 text-white flex-row-reverse'
                                : 'bg-gray-300 text-black'
                                }`}
                        >   
                            <img className='w-6 h-6 rounded-full mr-2' src="./vite.svg" alt="" />
                            <div>
                                <p className='font-semibold'>{message.sender}</p>
                                <p>{message.content}</p>
                                <span className='text-xs text-gray-900'>{new Date(message.timestamp).toLocaleTimeString()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 p-4 flex items-center justify-between z-10'>
                <div className='h-full  w-2/3 mx-auto flex gap-4 rounded-lg'>
                    <input type="text" placeholder='Type your message here...' className='w-full p-2 dark:bg-gray-600 dark:border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <button className='bg-green-500 text-white rounded-full px-4 py-2 cursor-pointer ml-2 flex items-center justify-center'>
                        <MdAttachFile size={20} />
                    </button>
                    <button className='bg-blue-500 text-white rounded-full px-4 py-2 cursor-pointer ml-2 flex items-center justify-center'>
                        <MdSend size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage