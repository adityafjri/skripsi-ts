import Fitur from './data/fitur.json'

export function getFeatures(){
    return Fitur
}

export default function handler(req,res){
    if(req.method !== 'GET'){
        res.setHeader('Allow', ['GET'])
        res.status(405).json({
            message: `Method ${req.method} is not allowed`
        })
    }else{
        const features = getFeatures()
        res.status(200).json(features)
    }
}