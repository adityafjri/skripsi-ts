export default function Footer(){
    return(

        <footer className="bg-black text-cream shadow m-4">
            <div className="w-full mx-auto px-4 lg:px-20 py-4 flex items-center justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/adityafjri" className="hover:underline">LawIF</a>. 
                </span>
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}