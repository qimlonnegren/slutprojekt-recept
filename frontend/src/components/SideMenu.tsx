import styling from '../styling.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const SideMenu = () => {
    const [categories, setCategories] = useState<Array<any>>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/categories`)
            .then(data => data.json())
            .then(data => setCategories(data))
    }, [])

    return <div className={styling.parentSideMenuCss}>
        <h2 className={styling.sideMenuCss}>Kategorier</h2>
        <ul>
            {categories.map(category =>
                <li key={category._id[0]}><Link to={ '/category/' + category._id[0] }>{category._id[0]} ({category.count})</Link></li>
            )}
        </ul>
    </div>
}

export default SideMenu;