import React, {useRef, useCallback, useState, useEffect} from "react";

import { Container, Error } from './style';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

const Input = ({placeholder, name, ...rest}) => {
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [isFocused, setIsFocused] = useState(false);
    const [isField, setIsField] = useState(false)

    const inputRef = useRef(null)

    const handleInputFocus = useCallback(() =>{
        setIsFocused(true)
    }, []);

    const handleInputBlur = useCallback(() =>{
        setIsFocused(false)

        setIsField(!!inputRef.current?.value);
    }, [])

    useEffect(() =>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
        
    }, [fieldName, registerField])

    return(
        <Container isErrored={!!error} isField={isField} isFocused={isFocused}>
            <label htmlFor={name}>{placeholder}</label>
            <div>
                <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    defaultValue={defaultValue}
                    ref={inputRef}
                    {...rest}
                />
                {error && (
                    <Error title={error}>
                        <FiAlertCircle color='#c53030' size={20} />
                    </Error>
                )}
            </div>
        </Container>
    )
}

export default Input