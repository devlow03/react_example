import { useEffect, useState } from "react";
import { getBanner } from "../common/api";

function useBanner(){
    const [banners,setBanners] = useState([])
    const [isLoading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try {
                const data = await getBanner()
                setBanners(data)
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    return {banners,isLoading,error}
}

export default useBanner