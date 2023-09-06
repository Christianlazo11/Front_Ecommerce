import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { Item } from './Item';
import { NavbarLink } from "./NavbarLink";

import { FaUserAlt } from "react-icons/fa";
import { images } from "../../helpers/images";
import { navBarLinks, userBarLinks } from "../../helpers/helpers";

export const NavigationBar = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar
                fluid
                rounded
            >
                <Navbar.Brand href="#">
                    <img
                        alt="Logo"
                        className="mr-3 h-6 sm:h-9"
                        src={images.Logo}
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Ecommerce
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        inline
                        // label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                        label={<FaUserAlt />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Christian Lazo
                            </span>
                            <span className="block truncate text-sm font-medium">
                                Christian-lazo-u@hotmail.com
                            </span>
                        </Dropdown.Header>
                        {
                            userBarLinks.map((e, index) => (
                                <Item key={index} name = {e.name} link = {e.link}/>
                            ))
                        }
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {
                        navBarLinks.map((e, index) => (
                            <NavbarLink key={index} name={e.name} link={e.link} />
                        ))
                    }

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
