import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { Item } from './Item';
import Logo  from "../../assets/img/logo.png";
import { FaUserAlt } from "react-icons/fa";

export const NavigationBar = () => {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="#">
                <img
                    alt="Logo"
                    className="mr-3 h-6 sm:h-9"
                    src={Logo}
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
                    <Item>
                        Carrito
                    </Item>
                    <Item>
                        Configuración
                    </Item>
                    <Item>
                        Mis compras
                    </Item>
                    <Dropdown.Divider />
                    <Item>
                        Cerrar Sesión
                    </Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Inicio
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    Categorias
                </Navbar.Link>
                <Navbar.Link href="#">
                    Productos
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    )
}
