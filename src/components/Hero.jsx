import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { NavigationCircles } from './NavigationCircles'
import { letters, professionTexts, aboutText, socialIcons } from '../data/index'

const Hero = () => {
    const [hoveredLetter, setHoveredLetter] = useState(null)
    const [currentText, setCurrentText] = useState(professionTexts[0])
    const [isRotating, setIsRotating] = useState(false)
    const [isTextVisible, setIsTextVisible] = useState(false)
    const [roadImageOpacity, SetRoadImageOpacity] = useState(0.5)

    let currentIndex = 0


    useEffect(() => {
        const intervalo = setInterval(() => {
            setIsRotating(true) //a rotação deve começar antes do texto mudar
            setTimeout(() => {
                // o resto é para quando chegar no index mesmo valor do length o resto der zero e resetar o 'currentIndex'
                currentIndex = (currentIndex + 1) % professionTexts.length
                setCurrentText(professionTexts[currentIndex])
                setIsRotating(false)

            }, 300)
        }, 5000)

        return () => clearInterval(intervalo)
    }, [])

    return (
        //a classe 'isolate' é para ajustar a imagem, trazendo para frente após mover para tras com o -z-10. Diz para o css que os elementos child não recebem os contextos de stack dos pais.
        //z-10 index maior que os componentes filhos mas menor que a navbar.
        <div id='home' className='w-full h-screen flex justify-center items-center flex-col relative isolate z-10'>
            <Navbar></Navbar>
            <div className='flex flex-col md:items-center items-start xl:gap-y-3 gap-y-3 md:mb-20 mb-0'>
                <h1 className='flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder mt-8 md:mt-0'>
                    <span className='flex mx-auto md:mx-0'>
                        {
                            letters.map((letra, index) => (
                                <span key={index} className='inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative' onMouseEnter={() => setHoveredLetter(index)} onMouseLeave={() => setHoveredLetter(null)}>
                                    <img src={letra.img} alt={`hover image ${index + 1}`} className={`xl:h-36 h-24 aboslute bottom-full -translate-x-1/2 ${letra.rotate} ${hoveredLetter === index ? 'visible' : 'invisible'}`} />
                                    {letra.char}
                                </span>
                            ))
                        }
                    </span>
                    <span className='xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden text-center'>
                        Desenvolvedor Full-Stack <span className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold transform origin-left transition-transform duration-300 ease-out text-start ${isRotating ? 'hidden md:rotate-[100deg]' : 'rotate-0'}`}>{currentText}</span>
                    </span>
                </h1>
                <button className='xl:w-[400px] md:w-[300px] w-[270px] bg-[#404040] dark:bg-gray-200 md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-white dark:text-gray-900 transition-colors duration-300 tracking-widest rounded-r-4xl flex justify-between items-center md:mr-auto md:mx-0 mx-auto'
                    onClick={() => setIsTextVisible(!isTextVisible)}
                    onMouseEnter={() => SetRoadImageOpacity(0.8)}
                    onMouseLeave={() => SetRoadImageOpacity(0.5)}>{isTextVisible ? 'Fechar Texto' : 'Ler Sobre'}
                    <i className={`${isTextVisible ? ' bx-book-alt' : ' bx-book-open cursor-pointer'} bx cursor-pointer`}></i>
                </button>
                <div className='flex md:gap-12 gap-2 mr-auto items-start absolute md:relative left-4 md:left-auto top-20 md:top-auto flex-col md:flex-row'>
                    {socialIcons.map((icons, index) => (
                        <a href="#" key={index} className='xl:text-3xl md:text-2xl text-red-500 dark:text-yellow-500 dark:hover:text-white hover:text-gray-500 transition-colors duration-500'>
                            <i className={icons.icon}></i>
                        </a>
                    ))}
                </div>
                <div className='flex flex-col gap-3 lg:w-[700px] md:w-[500px] w-[350px] absolute left-1/2 -translate-x-1/2 -z-10'>
                    <img
                        src="images/road.png"
                        alt="Road Image"
                        className='w-full mx-auto transition-opacity duration-300'
                        style={{ opacity: roadImageOpacity }}
                    />
                    <span className='xl:text-xs md:text-[10px] text-[8px] font-bold tracking-wide absolute -top-5 xl:right-22 lg:right-26 md:right-16 right-10 rotate-[3.5deg] animate-bounce'>Procurando Novos Desafios</span>
                    <div className={`xl:h-[150px] h-[100px] px-3 xl:text-lg md:text-base text-xs font-light dark:text-gray-200 text-gray-900 text-justify tracking-wide overflow-y-auto custom-scrollbar transform transition-transform duration-300 origin-top ${isTextVisible ? 'scale-y-100' : 'scale-y-0'}`}>
                        <p className='xl:py-3 py-1 px-1 [&::first-letter]:text-4xl [&::first-letter]:ml-4 dark:[&::first-letter]:text-yellow-500 [&::first-letter]:text-red-500'>{aboutText}</p>
                    </div>
                </div>
            </div>
            <NavigationCircles section='home'></NavigationCircles>
        </div>
    )
}

export default Hero