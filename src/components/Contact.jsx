import React from 'react'
import { NavigationCircles } from './NavigationCircles'

const Contact = () => {
    return (
        <div id='contact' className='h-screen flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-light md:mb-32 mb-24'>Entrar em Contato</h2>
            <form action="" className='flex flex-col space-y-8 lg:space-y-12'>
                <input type="email" placeholder='Email' className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500/50 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500' />
                <textarea name="" id="" placeholder='Mensagem' className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500/50 placeholder-gray-600 dark:placeholder-yellow-500/50 min-h-[100px] max-h-[200px] resize-y p-3 transition-colors duration-500'></textarea>

                <input type="submit" value='Enviar' className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500' />
            </form>
            <NavigationCircles section='contact'></NavigationCircles>
        </div>
    )
}

export default Contact