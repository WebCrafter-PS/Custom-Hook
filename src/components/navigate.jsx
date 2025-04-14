import { Link } from "react-router";


const Navigation =()=>{

    return(
        <div className="navigate">
            <ul className="list">
                <li><Link to='/stared'>Starred</Link></li>
                <li><Link to='/country'>Country</Link></li>
                <li><Link to='/hook'>Todo</Link></li>
                <li>Starred</li>
            </ul>
        </div>
    )
}
export default Navigation;