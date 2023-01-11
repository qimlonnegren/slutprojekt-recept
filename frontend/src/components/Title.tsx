import styling from '../styling.module.css'
import { Link } from 'react-router-dom';

const Title = () => (
<div className={styling.TitleCss}>
    <h1 className={styling.H1Css}><Link to="/">Cupcake Mania</Link></h1>
</div>
)

export default Title;
