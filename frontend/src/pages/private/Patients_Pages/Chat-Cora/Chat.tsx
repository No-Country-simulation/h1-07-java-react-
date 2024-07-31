import React, { useState } from 'react'
import { API_URL } from '../../../../api/api';
import { ReactTyped } from 'react-typed';
import { ArrowIcon } from '../../../../../public/icons/Icons';
import { Link } from 'react-router-dom';

interface MessageProps {
  sender: 'user' | 'bot';
  message: string;
}


export default function Chat() {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [newMessage, setNewMessage] = useState('');


  const submitMessageUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsTyping(true)
    if (newMessage.trim() !== '') {
      setMessages(prev => [...prev, { sender: 'user', message: newMessage }])
      responseGemini()
      setNewMessage("")

    }
    (e.target as HTMLFormElement).reset();
  }

  const responseGemini = async () => {
    const token = localStorage.getItem('TOKEN_KEY');

    try {
      const res = await fetch(`${API_URL}/gemini/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: newMessage
      })


      if (!res.ok) {
        throw new Error("Fail:" + res.status);
      }
      const data = await res.text()
      setMessages((prev) => [...prev, { message: data, sender: 'bot' }])
    } catch (err: any) {
      console.log(err)
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <main className=" min-h-screen bg-gray-100 md:flex md:justify-center">
      <div className="w-full max-w-md relative  bg-white rounded-lg shadow-lg  max-md:m-auto">
        <header className="relative bg-white flex justify-center items-center p-4 text-gray-700">
          <img src="Ellipse_136.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-semibold text-center">Cora</h1>
          <Link to={"/patient-home"} className=' absolute left-5'><ArrowIcon width={30} height={30} /></Link>
        </header>
        <div className=" font-mono min-h-[90vh] relative overflow-y-auto p-4 pb-36 bg-gradient-to-t from-pink-300 to-indigo-500">
          <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img src="Ellipse_136.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex max-w-80 bg-white rounded-lg p-3 gap-3">
              <p className="text-[#1F4A69]">¡Hola! 💫 Que gusto verte  por aquí, mi nombre es Cora! </p>
            </div>
          </div>
          <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img src="Ellipse_136.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex max-w-80 bg-white rounded-lg p-3 gap-3">
              <p className="text-[#1F4A69]"> No soy un reemplazo de un profesional de la salud. No puedo diagnosticar ni recomendar medicaciones. No estoy capacitado para situaciones de emergencia</p>
            </div>
          </div>
          {messages && messages.map((message) => (
            <div className={`flex ${message.sender == 'bot' ? 'justify-start' : 'justify-end'} mb-4 cursor-pointer`}>
              {message.sender == 'bot' &&
                <>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                    <img src={`Ellipse_136.png`} alt="My Avatar" className={`w-8 h-8 rounded-full `} />
                  </div>
                  <ReactTyped strings={[message.message]} showCursor={false} typeSpeed={5} className='flex max-w-80 rounded-lg p-3 gap-3 bg-light-color text-[#1F4A69]' />
                </>
              }
              {message.sender == 'user' &&
                <>
                  <div className={`flex max-w-80 rounded-lg p-3 gap-3 bg-[#D9FFE3] text-[#1F4A69]'}`}>
                    <p>{message.message}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                    <img src={`https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato`} alt="My Avatar" className={`w-8 h-8 rounded-full `} />
                  </div>
                </>
              }
            </div>
          ))
          }

        </div>

        <footer className="bg-[#1F4A69] border-t border-gray-300 p-4 absolute bottom-0 w-full">
          <form className="flex items-center" onSubmit={(e) => submitMessageUser(e)}>
            <input disabled={isTyping} onChange={(e) => setNewMessage(e.target.value)} type="text" name='message' placeholder="Escribe aquí..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
            <button disabled={isTyping} type='submit' className={`${isTyping && 'disabled:brightness-90 cursor-not-allowed'}  bg-indigo-500 text-white px-4 py-2 rounded-md ml-2`}>Enviar</button>
          </form>
        </footer>
      </div >
    </main >
  )
}
