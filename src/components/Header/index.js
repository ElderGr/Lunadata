import React, {useState} from 'react';
import { FaDatabase, FaCloud, FaSitemap, FaBorderNone, FaChevronDown } from "react-icons/fa";

import { Menu, MenuItens, MenuCollapse, ItemsDetails } from "./styles";
import AnchorButton from "../AnchorButton";

import Logo from "../../assets/Logo";

function TopMenu() {

    const [collapse, setCollapse] = useState(true);
    const [menuItem, setMenuItem] = useState('');

    return (
        <Menu>
            <nav className='menu-container'>
                <div>
                    
                    <Logo width='60px' heigth='60px' />
                   
                    <MenuItens item={menuItem}>
                        <li onClick={() => {
                            setCollapse(!collapse);
                            menuItem === 'services' ? setMenuItem('') : setMenuItem('services')
                        }}
                            className={menuItem === 'services' && 'item-active'}
                        >
                            <span>Serviços</span>
                            <FaChevronDown />
                        </li>
                        <li onClick={() => {
                            setCollapse(!collapse);
                            menuItem === 'cases' ? setMenuItem('') : setMenuItem('cases')
                            
                        }}
                            className={menuItem === 'cases' && 'item-active'}
                        >
                            <span>Cases</span>
                            <FaChevronDown />
                        </li>
                        <li onClick={() => {
                            setCollapse(!collapse);
                            setMenuItem('articles')
                        }}
                        >
                            <span>Artigos</span>
                        </li>
                    </MenuItens>
                </div>

                <AnchorButton href='#contact-section' width='200px' color='#EE4D29'>
                    Entre em contato
                </AnchorButton>
            </nav>

            {!collapse && (
                <MenuCollapse className='details-container'>
                    <div>
                        A solução perfeita para seu negócio!
                    </div>
                    <div>
                        <h2>Principais serviços</h2>
                        <div>
                            <ItemsDetails>
                                <div>
                                    <FaDatabase size={20} />
                                </div>
                                <div>
                                    <div>Engenharia de dados</div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet diam mauris.</span>
                                </div>
                            </ItemsDetails>

                            <ItemsDetails>
                                <div>
                                    <FaCloud size={22} />
                                </div>
                                <div>
                                    <div>Cloud Computing</div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet diam mauris.</span>
                                </div>
                            </ItemsDetails>

                            <ItemsDetails>
                                <div>
                                    <FaSitemap size={22} />
                                </div>
                                <div>
                                    <div>Inteligência Artificial</div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet diam mauris.</span>
                                </div>
                            </ItemsDetails>

                            <ItemsDetails>
                                <div>
                                    <FaBorderNone size={22} />
                                </div>
                                <div>
                                    <div>IOT</div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet diam mauris.</span>
                                </div>
                            </ItemsDetails>

                        </div>
                    </div>
                </MenuCollapse>
            )}
        </Menu>
    );
}

export default TopMenu;