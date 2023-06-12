import Link from "next/link"
import React from "react"

export default function Navigation(){
    return(
            <nav className={`bg-black sticky top-0 z-30`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/">
                        <a className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="#f9f9f9"
                            className="w-6 h-6"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                            />
                        </svg>
                        <h1 className="text-white text-2xl font-semibold mx-2">LawIF</h1>
                        </a>
                    </Link>
                    
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            <li>
                                <Link href="/">
                                    <a className="block py-2 px-3 text-white hover:text-cream" >
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/search">
                                    <a className="block py-2 px-3 text-white hover:text-cream" >
                                        Fitur 1
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="block py-2 px-3 text-white hover:text-cream" >
                                        Fitur 2
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="block py-2 px-3 text-white hover:text-cream" >
                                        Fitur 3
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    )
}