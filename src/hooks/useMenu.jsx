
import { useEffect, useState } from "react"

const useMenu = ()=> {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(menus => {
            // const popularMenus = menus.filter(item => item.category === 'popular')
            setData(menus)
            setLoading(false)
        })
    },[])
    return [data, loading ]

}

export default useMenu;