import Link from "next/link"
import Image from "next/image"

type CardProps = {
    feature: {
        id: number
        name: string
        detail: string
    }
}

const Card: React.FC<CardProps> = ({feature}) => {
    return(
        <Link href={`/${feature.name}`}>
            <a className="w-fit bg-black text-cream shadow-lg overflow-hidden hover:bg-black/90 transition duration-150">
                <div className="relative">
                    <Image
                        src={"/assets/tingey-injury-law-firm-6sl88x150Xs-unsplash.jpg"}
                        height={300}
                        width={400}
                        alt="Tingey Injury Law Firm"
                    />
                    
                </div>
                <div className="p-5 space-y-3 max-w-xs">
                    <h5 className="text-2xl font-bold">Fitur {feature.id}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {feature.detail}
                    </p>
                </div>
            </a>
        </Link>
    )    
}

export default Card
