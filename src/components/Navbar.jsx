import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    const [activeSection, setActiveSection] = useState('home')
    const isScrollingRef = useRef(false) //para diferenciar a navegação pelas sessões entre clicar no clink e scroll manual.

    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingRef.current) return
            const sections = ['home', 'services', 'contact']
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId)
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect() //este método é para saber se a seção está sendo visualizada. Top é a distancia do top da viewport até top da section, bottom é do top da vp até o bottom da section
                    if (top <= 100 && bottom >= 100) {
                        setActiveSection(sectionId)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, sectionId) => {
        e.preventDefault() //para não recarregar a página quando clicar no link.
        setActiveSection(sectionId)
        isScrollingRef.current = true //quando o estado do useRef muda, não renderiza o componente, sendo mais adequado que o useState para esse tipo de caso.
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
            //para garantir que não de orride no estado da sessão por scroll do usuario
            isScrollingRef.current = false
        }, 1000);
    }

    return (
        // md: e xl: é o equivalente ao media query para dispositivos de tamanho medio e pequeno || quanto maior a tela, menor será a height da navbar e maior será o padding 
        //z-50 é para o navbar não ficar atras das outras camadas quando dar scroll
        <div className='w-full md:h-12 sm:h-14 h-18 bg-white dark:bg-gray-900 transition-colors duration-500 flex flex-col md:flex-row justify-center md:justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 z-50'>
            <div className='flex items-center sm:gap-x-4 gap-x-2'>
                <a href="#" className='md:text-2xl sm:text-xl text-lg '>Icaro Moreira</a>
                {/* bx é do box icon || sun é o nome do ícone*/}
                <i
                    className={`${darkMode ? 'bx bx-sun' : 'bx bx-moon'}  md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2 cursor-pointer`}
                    onClick={toggleDarkMode}></i>
            </div>
            <div>
                {/* classe group pra utilizar nested elements */}
                <a href="#home" className={`group md:text-base lg:text-xl text-sm font-light  lg:mr-12 mr-8 tracking-wide relative ${activeSection === 'home' ? 'text-red-500 dark:text-yellow-500' : 'text-gray-600 dark:text-white'}`}
                    onClick={(e) => handleNavClick(e, 'home')}
                >
                    Home
                    {/* estilizando o underline || por default o transform inicia com origem no centro */}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] dark:bg-yellow-500 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition duration-300 group-hover:origin-left origin-right ${activeSection === 'home' ? 'bg-red-500 dark:bg-yellow-500 scale-x-100' : 'bg-gray-600 dark:bg-white scale-x-0'}`}></span>
                </a>
                <a href="#services" className={`group md:text-base lg:text-xl text-sm font-light dark:text-white text-gray-600 lg:mr-12 mr-8 tracking-wide relative ${activeSection === 'services' ? 'text-red-500 dark:text-yellow-500' : 'text-gray-600 dark:text-white'}`}
                    onClick={(e) => handleNavClick(e, 'services')}
                >
                    Serviços
                    {/* estilizando o underline || por default o transform inicia com origem no centro */}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] dark:bg-white bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition duration-300 group-hover:origin-left origin-right ${activeSection === 'services' ? 'bg-red-500 dark:bg-yellow-500 scale-x-100' : 'bg-gray-600 dark:bg-white scale-x-0'}`}></span>
                </a>
                <a href="#contact" className={`group md:text-base lg:text-xl text-sm font-light dark:text-white text-gray-600 lg:mr-12 mr-8 tracking-wide relative ${activeSection === 'contact' ? 'text-red-500 dark:text-yellow-500' : 'text-gray-600 dark:text-white'}`}
                    onClick={(e) => handleNavClick(e, 'contact')}
                >
                    Contato
                    {/* estilizando o underline || por default o transform inicia com origem no centro */}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] dark:bg-white bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition duration-300 group-hover:origin-left origin-right ${activeSection === 'contact' ? 'bg-red-500 dark:bg-yellow-500 scale-x-100' : 'bg-gray-600 dark:bg-white scale-x-0'}`}></span>
                </a>
            </div>
        </div>
    )
}

export default Navbar
