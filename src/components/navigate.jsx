import { Link } from "react-router";


const Navigation =()=>{

    return(
        <div className="navigate">
            <ul className="list">
                <li><Link to='/stared'>Stared</Link></li>
                <li><Link to='/country'>Country</Link></li>
                <li>Contact Us</li>
                <li>Starred</li>
            </ul>
        </div>
    )
}
export default Navigation;