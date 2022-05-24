import styling from '../styling.module.css'
import { useState, useEffect } from 'react'


const SideMenu = () => {
    const [Categories, setCategories] = useState<Array<string>>([]);

    useEffect(() => {
        fetch("REACT_APP_API_BASE_URL/categories")
            .then(data => data.json())
            .then(Categories => setCategories(Categories))

    }, [])
    return <div className={styling.parentSideMenuCss}><h2 className={styling.sideMenuCss}>Kategorier</h2><ul>{Categories.map(category => <li>{category} </li>)}</ul></div>
}
export default SideMenu;


// /categories/:categoryName/recipes'