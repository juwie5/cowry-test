import axios from 'axios'

const ACCESS_KEY ="sN_63d2t5XEDCLeZ_tCqLl-xjWBN1ljTX0xI_8PhvWc"

const BASE_ENDPOINT ="https://api.unsplash.com/"

//const photoCollection = `${apiEndpoint}/search/collections`

const PHOTOS_ENDPOINT = `${BASE_ENDPOINT}/search/photos`


export async function search(param){
    try {
        const res = await axios.get(PHOTOS_ENDPOINT, {
            params: {
                client_id: ACCESS_KEY,
                ...param
            },
        })

        if (res.status == 200) {
           
            return res.data
        } else {
            return null
        }
        
    }catch (err) {
        console.log(err);
        return null;
    } 
}