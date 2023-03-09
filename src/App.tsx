// States
import { useState } from 'react';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// Images
import logo from './assets/logo.svg';
import bgMenu from './assets/bg-pattern-mobile-nav.svg';
import heroImg from './assets/image-intro-mobile.jpg';
import heroImgDesk from './assets/image-intro-desktop.jpg';
import heroImgContent1 from './assets/bg-pattern-intro-left-mobile.svg';
import heroImgContent2 from './assets/bg-pattern-intro-right-mobile.svg';
import heroImgContent1Desk from './assets/bg-pattern-intro-left-desktop.svg';
import heroImgContent2Desk from './assets/bg-pattern-intro-right-desktop.svg';
import snappy from './assets/icon-snappy-process.svg';
import affordable from './assets/icon-affordable-prices.svg';
import people from './assets/icon-people-first.svg';
import hww from './assets/bg-pattern-how-we-work-mobile.svg';
import hwwd from './assets/bg-pattern-how-we-work-desktop.svg';
import bgFooter from './assets/bg-pattern-footer-mobile.svg';
import bgFooterDesk from './assets/bg-pattern-footer-desktop.svg';

function App() {

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  }

  return (

    <>
      <header>
        <div className='container mx-auto px-0 md:px-5 md:flex md:justify-between'>
          <div className='flex justify-between items-center py-6 px-5'>
            <div>
              <img
                src={logo}
                alt="logo img"
              />
            </div>
            <div
              className='py-0.5 px-1.5 border-2 md:border-0 border-dark-violet cursor-pointer'
              onClick={handleMenu}
            >
              <FontAwesomeIcon
                icon={open ? faXmark : faBars}
                size="lg"
                className='w-5 md:hidden'
              />
            </div>
          </div>

          <div className={`bg-dark-violet md:bg-white transition-opacity duration-500 md:visible md:h-full md:opacity-100 ${open ? 'h-full visible opacity-100' : 'h-0 invisible opacity-0'}`}>
            <nav className='container mx-auto px-5 py-8'>
              <ul className='flex flex-col md:flex-row items-center justify-center gap-7 text-very-light-gray text-xl md:text-lg font-bold'>
                <li className='md:text-dark-grayish-violet md:hover:text-very-dark-violet md:transition-colors'><a href="#">How we work</a></li>
                <li className='md:text-dark-grayish-violet md:hover:text-very-dark-violet md:transition-colors'><a href="#">Blog</a></li>
                <li className='md:text-dark-grayish-violet md:hover:text-very-dark-violet md:transition-colors'><a href="#">Account</a></li>
                <li
                  className='border-2 border-very-light-gray md:border-very-dark-violet md:text-very-dark-violet md:hover:text-very-light-gray md:transition-colors w-full md:w-auto text-center py-3 md:py-1 md:px-8 md:hover:bg-very-dark-violet'
                ><a href="#">View plans</a></li>
              </ul>
            </nav>
            <img
              src={bgMenu}
              alt="bg mobile version nav responsive"
              className='pt-10 pointer-events-none w-full md:hidden'
            />
          </div>
        </div>
      </header>

      <section className='bg-dark-violet relative z-10 md:mb-96'>
        <div className='md:container md:mx-auto md:px-5 md:flex md:flex-row-reverse md:justify-between md:items-center md:gap-16'>
          <div>
            <img
              src={heroImg}
              alt="image intro mobile"
              className='md:hidden pointer-events-auto w-full'
            />
            <img
              src={heroImgDesk}
              alt="image intro mobile"
              className='w-0 md:w-auto pointer-events-auto md:-mb-48 md:mt-20'
            />
          </div>
          <div className='container mx-auto md:mx-0 px-5 md:px-0 text-center md:text-start md:w-80 md:flex-1'>
            <img
              src={heroImgContent1}
              alt="bg-intro left mobile"
              className='md:hidden absolute left-0 -z-20'
            />
            <img
              src={heroImgContent1Desk}
              alt="bg-intro left mobile"
              className='hidden md:block absolute left-0 -bottom-96 -z-20'
            />
            <h2
              className='pt-20 font-dm-serif-display font-normal text-5xl md:text-7xl text-very-light-gray before:block before:h-0.5 before:mb-10 before:w-36 before:bg-very-light-gray'
            >Humanizing your insurance.</h2>
            <p className=' text-very-light-gray pt-5 text-sm pb-7'>Get your life insurance coverage easier and faster. We blend our expertise
              and technology to help you find the plan that’s right for you. Ensure you
              and your loved ones are protected.</p>
            <button
              type='button'
              className='mb-20 border-2 border-very-light-gray hover:bg-very-light-gray text-very-light-gray hover:text-very-dark-violet transition-colors py-1.5 px-6 text-sm uppercase pointer-events-auto font-bold'
            >View plans</button>
            <img
              src={heroImgContent2}
              alt="bg-intro right mobile"
              className='md:hidden absolute right-0 -bottom-48 pointer-events-none'
            />
            <img
              src={heroImgContent2Desk}
              alt="bg-intro left mobile"
              className='hidden md:block absolute right-0 top-0 w-80'
            />
          </div>
        </div>
      </section>

      <main className='container mx-auto px-5'>
        <h1 className=' font-dm-serif-display font-bold text-5xl md:text-6xl mt-32 mb-20 text-very-dark-violet before:block before:h-0.5 before:mx-auto md:before:mx-0 before:mb-10 before:w-36 before:bg-dark-grayish-violet text-center md:text-start'>We’re different</h1>

        <div className='grid md:grid-cols-3 gap-16'>
          <section className=' flex flex-col items-center md:items-start justify-center text-center md:text-start gap-5'>
            <img
              src={snappy}
              alt="snappy process icon"
            />
            <h2 className=' font-dm-serif-display font-bold text-2xl text-very-dark-violet'>Snappy Process</h2>
            <p className=' text-dark-grayish-violet'>Our application process can be completed in minutes, not hours. Don’t get
              stuck filling in tedious forms.</p>
          </section>
          <section className=' flex flex-col items-center md:items-start justify-center text-center md:text-start gap-5'>
            <img
              src={affordable}
              alt="snappy process icon"
            />
            <h2 className=' font-dm-serif-display font-bold text-2xl text-very-dark-violet'>Affordable Prices</h2>
            <p className=' text-dark-grayish-violet'>We don’t want you worrying about high monthly costs. Our prices may be low,
              but we still offer the best coverage possible.</p>
          </section>
          <section className=' flex flex-col items-center md:items-start justify-center text-center md:text-start gap-5'>
            <img
              src={people}
              alt="snappy process icon"
            />
            <h2 className=' font-dm-serif-display font-bold text-2xl text-very-dark-violet'>People First</h2>
            <p className=' text-dark-grayish-violet'>Our plans aren’t full of conditions and clauses to prevent payouts. We make
              sure you’re covered when you need it.</p>
          </section>
        </div>
      </main>

      <section className='container mx-auto px-5 mt-32'>
        <div className='bg-dark-violet relative flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-40 lg:gap-60 pt-20 md:py-20 px-10 text-center z-10'>
          <img
            src={hww}
            alt="bg how we work section"
            className='md:hidden absolute top-0 right-0 -z-20 h-full'
          />
          <img
            src={hwwd}
            alt="bg how we work section"
            className='hidden md:block absolute top-0 right-0 -z-20 h-full'
          />
          <h2 className=' font-dm-serif-display text-very-light-gray font-regular text-4xl md:text-5xl md:text-start'>Find out more about how we work</h2>
          <button
            type='button'
            className='mb-20 md:mb-0 border-2 border-very-light-gray hover:bg-very-light-gray text-very-light-gray hover:text-very-dark-violet transition-colors font-bold py-1.5 px-6 text-sm uppercase pointer-events-auto'
          >How we work</button>
        </div>

      </section>

      <footer className='mt-32 bg-very-light-gray relative z-10'>

        <div className='relative'>
          <img
            src={bgFooter}
            alt="bg footer mobile"
            className='md:hidden absolute w-full h-40 -z-10 pointer-events-none'
          />
          <img
            src={bgFooterDesk}
            alt="bg footer desktop"
            className='hidden md:block absolute -z-10 pointer-events-none'
          />
          <div className='container mx-auto px-5 pt-16 pb-10 flex flex-col md:flex-row md:justify-between items-center gap-7 z-50'>
            <div>
              <img
                src={logo}
                alt="logo img"
              />
            </div>
            <div className='flex gap-5 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className='hover:fill-very-dark-violet cursor-pointer transition-colors' fill="#837D88" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path className='hover:fill-very-dark-violet cursor-pointer transition-colors' fill="#837D88" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className='hover:fill-very-dark-violet cursor-pointer transition-colors' fill="#837D88" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className='hover:fill-very-dark-violet cursor-pointer transition-colors' fill="#837D88" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-5 py-10 flex flex-col md:flex-row gap-10 md:gap-80 border-t text-center md:text-start'>
          <ul className='uppercase text-sm'>
            <h3 className=' text-dark-grayish-violet pb-7 font-bold'>Our company</h3>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>How we work</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Why Insure?</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>View plans</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Reviews</li>
          </ul>
          <ul className='uppercase text-sm'>
            <h3 className=' text-dark-grayish-violet pb-7 font-bold'>Help me</h3>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>FAQ</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Terms of use</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Privacy policy</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Cookies</li>
          </ul>
          <ul className='uppercase text-sm'>
            <h3 className=' text-dark-grayish-violet pb-7 font-bold'>Contact</h3>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Sales</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Support</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Live chat</li>
          </ul>
          <ul className='uppercase text-sm'>
            <h3 className=' text-dark-grayish-violet pb-7 font-bold'>Others</h3>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Careers</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Press</li>
            <li className='text-very-dark-violet font-bold pb-3 cursor-pointer hover:decoration-solid hover:underline'>Licenses </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
