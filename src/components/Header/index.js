import React, {useState} from 'react';
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Media from 'react-media';

import { Menu, MenuItens, MenuCollapse } from "./styles";
import AnchorButton from "../AnchorButton";

import Logo from '../../assets/logo_original.svg';
import Services from './Services';
import Cases from './Cases';

function Header() {

    const [collapse, setCollapse] = useState(true);
    const [menuItem, setMenuItem] = useState('');

    return (
        <Menu>
            <nav>
                <div>
                    <Media query={{ maxWidth: 1024 }}>
                        <FiMenu onClick={() => setCollapse(!collapse)} size={20} />
                    </Media>

                    <Link to='/' onClick={() => setCollapse(true)}>
                        <img src={Logo} alt='Lunadata logo' style={{width: '80px', height: '80px'}} />
                    </Link>
                    
                    <Media query={{ minWidth: 1025 }}>
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
                                <Link onClick={() => setCollapse(true)} to='/articles'>
                                    <span>Artigos</span>
                                </Link>
                            </li>
                        </MenuItens>
                    </Media>
                </div>

                <Media query={{maxWidth: 1024}}>
                    <AnchorButton href='#contact-section' width='150px' color='#EE4D29'>
                        Entre em contato
                    </AnchorButton>
                </Media>
                <Media query={{minWidth: 1025}}>
                    <AnchorButton href='#contact-section' width='200px' color='#EE4D29'>
                        Entre em contato
                    </AnchorButton>
                </Media>
            </nav>

            {!collapse && (
                <>
                    <MenuCollapse className='details-container'>    
                        <Media query={{ minWidth: 1025 }}>
                            <>
                                {menuItem === 'services' && <Services closeMenu={() => setCollapse(true)} />}
                                {menuItem === 'cases' && <Cases closeMenu={() => setCollapse(true)} />}
                            </>
                        </Media>

                        <Media query={{ maxWidth: 1024 }}>
                            <ul>
                                <li
                                    onClick={() => {
                                        if(menuItem === 'services'){
                                            setMenuItem('')
                                        }else{
                                            setMenuItem('services')
                                        }
                                    }}
                                >
                                    <p>Serviços</p>
                                    {menuItem === 'services' ? (<FaChevronDown size={20} />) : (<FaChevronRight size={20} />)}
                                </li>
                                {menuItem === 'services' && (
                                    <div>
                                        <Services closeMenu={() => setCollapse(true)} />
                                    </div>
                                )}

                                <li
                                    onClick={() => {
                                        if(menuItem === 'cases'){
                                            setMenuItem('')
                                        }else{
                                            setMenuItem('cases')
                                        }
                                    }}  
                                >
                                    <p>Casos</p>
                                    {menuItem === 'cases' ? (<FaChevronDown size={20} />) : (<FaChevronRight size={20} />)}
                                </li>
                                {menuItem === 'cases' && (
                                    <div>
                                        <Cases closeMenu={() => setCollapse(true)} />
                                    </div>
                                )}
                                <li>
                                    <p>Artigos</p>
                                </li>
                            </ul>
                        </Media>
                    </MenuCollapse>
                </>
            )}
        </Menu>
    );
}

export default Header;