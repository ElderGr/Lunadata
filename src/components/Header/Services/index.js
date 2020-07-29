import React from "react";

import { FaDatabase, FaCloud, FaSitemap, FaBorderNone} from "react-icons/fa";
import { ItemsDetails } from "./styles";

export default function Services(){
    return(
        <>
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
        </>
    )
}