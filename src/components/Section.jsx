import { Link } from "react-router-dom"

function Section(){
    return(
        <nav>
            <section>
                <ul>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link><li>Profile</li></Link>
                </ul>
            </section>
        </nav>
    )
}

export default Section