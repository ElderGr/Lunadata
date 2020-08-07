import React, {useState} from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Menu, MenuItens, MenuCollapse } from "./styles";
import AnchorButton from "../AnchorButton";

import Logo from "../../assets/Logo";
import Services from './Services';
import Cases from './Cases';

function Header() {

    const [collapse, setCollapse] = useState(true);
    const [menuItem, setMenuItem] = useState('');

    return (
        <Menu>
            <nav className='menu-container'>
                <div>
                    
                    <Link to='/'>
                        <Logo width='60px' heigth='60px' />
                    </Link>
                   
                    <MenuItens item={menuItem}>
                        <li onClick={() => {
                            if(menuItem === 'services'){
                                setMenuItem('')
                                setCollapse(true);
                            }else{
                                setCollapse(false);
                                setMenuItem('services')
                            }
                        }}
                            className={menuItem === 'services' && 'item-active'}
                        >
                            <span>Serviços</span>
                            <FaChevronDown />
                        </li>
                        <li onClick={() => {
                            if(menuItem === 'cases'){
                                setMenuItem('')
                                setCollapse(true);
                            }else{
                                setCollapse(false);
                                setMenuItem('cases')
                            }
                        }}
                            className={menuItem === 'cases' && 'item-active'}
                        >
                            <span>Cases</span>
                            <FaChevronDown />
                        </li>
                        <li>
                            <Link to='/articles'>
                                <span>Artigos</span>
                            </Link>
                        </li>
                    </MenuItens>
                </div>

                <AnchorButton href='#contact-section' width='200px' color='#EE4D29'>
                    Entre em contato
                </AnchorButton>
            </nav>

            {!collapse && (
                <MenuCollapse className='details-container'>    
                    {menuItem === 'services' && <Services closeMenu={() => setCollapse(true)} />}

                    {menuItem === 'cases' && <Cases closeMenu={() => setCollapse(true)} />}
                </MenuCollapse>
            )}
        </Menu>
    );
}

export default Header;