import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom";
export const NavbarLink = ({name, link}) => {
    return (
        <>
            <Navbar.Link
                active
                
            >
                <Link className="text-white hover:text-lime-200" to={link}>{name}</Link> 
            </Navbar.Link>
        </>
    )
}
