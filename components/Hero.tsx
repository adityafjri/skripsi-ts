import Link from "next/link"
import Image from "next/image"

export default function Hero(){
    return(
        <section className="grid max-w-screen lg:grid-cols-2 px-4 py-8 mx-auto lg:mx-32 lg:py-32">
            <div className="mr-auto my-auto lg:space-y-6 lg:mx-auto space-y-4">
                <h1 className="text-3xl font-bold lg:max-w-sm lg:font-extrabold">Sistem Manajemen UU Indonesia dan Turunannya</h1>
                <p className="font-light lg:font-normal">
                    Mengimplementasikan hasil penelitian 
                </p> 
                <p className="mb-6 text-sm font-light italic lg:font-normal">"PEMBUATAN GRAPH DARI DOKUMEN PERATURAN / PERUNDANG-UNDANGAN <br></br> DAN ANALISISNYA DENGAN TEKNOLOGI BIG DATA"</p>

                <Link href={"#features"}>
                    <a className="inline-flex items-center justify-between px-8 py-3 w-full font-medium text-center text-cream bg-black hover:bg-black/90 transition duration-150 lg:w-fit">
                        <span>Get started</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </a>
                    
                </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center">
                <Image 
                    src={'/assets/Logo-UNPAR.png'}
                    alt="Logo UNPAR"
                    width={400}
                    height={300}
                />
            </div>                
        </section>
    )
}