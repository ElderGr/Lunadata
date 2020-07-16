import React from "react";

import { Container } from './style';

const Button = (props, children) => {
    return(
        <Container {...props} />
    )
}

export default Button;