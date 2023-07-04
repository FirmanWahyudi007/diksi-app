import Link from "next/link";
import Image from "next/image";
import { NAVBAR_ITEMS } from "@/utils/constant";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const isActive = (path: string) => (router.pathname === path ? "active" : "");
  return (
    <>
      <nav
        className='relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10
         dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start'
      >
        <div className='flex w-full flex-wrap items-center justify-between px-6'>
          <div className='flex items-center'>
            <button
              className='block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline 
                hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 
                dark:text-neutral-200 lg:hidden'
              type='button'
              data-te-collapse-init
              data-te-target='#navbarSupportedContentY'
              aria-controls='navbarSupportedContentY'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='[&>svg]:w-7'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-7 w-7'
                >
                  <path
                    fill-rule='evenodd'
                    d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                    clip-rule='evenodd'
                  />
                </svg>
              </span>
            </button>

            <a className='text-primary dark:text-primary-400' href='#!'>
              <span className='[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0'>
                <Image
                  src='/icons/logo.svg'
                  alt='logo'
                  width={24}
                  height={24}
                />
              </span>
            </a>
          </div>

          <div
            className='!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto'
            id='navbarSupportedContentY'
            data-te-collapse-item
          >
            <ul className='mr-auto lg:flex lg:flex-row' data-te-navbar-nav-ref>
              {NAVBAR_ITEMS.map((item, index) => (
                <li data-te-nav-item-ref key={index}>
                  <Link
                    className={`block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out 
                    hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 
                    dark:hover:text-neutral-300 dark:focus:text-neutral-300 
                    dark:disabled:text-white/30 lg:ml-4 lg:px-2 lg:py-0 
                    lg:hover:text-black lg:focus:text-black`}
                    href={item.path}
                  >
                    <span className={isActive(item.path) ? "text-black" : ""}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='my-1 flex items-center lg:my-0 lg:ml-auto'>
            <button
              type='button'
              className='text-primary mr-2  rounded px-4 py-2 font-bold focus-within:ring-2 focus-within:ring-blue-500 
                 hover:bg-blue-800 hover:text-white'
            >
              Login
            </button>
            <button
              type='button'
              className=' rounded bg-blue-500  px-4 py-2 font-bold text-white hover:bg-blue-800'
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
