import { useState } from 'react'


/**
 * @function useToggle
 * @param {Boolean} 
 * @returns  {Boolean, Function} 
 */

export const useToggle = initToggle => {
    const [toggle, setToggle] = useState(initToggle)

    const toggler = () => {
        setToggle(!toggle)
    }
    return {toggle, toggler}
}

/**
 * @function useFormProperties
 * @param {object} initInputs 
 * @param {Function} submitCallback 
 * @returns {Function, Function, Object}
 */

export const useFormProperties = (initInputs, submitCallback) => {
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = e => {
        e.preventDefault()
        submitCallback(inputs)
        setInputs(initInputs)
    }

    return {handleChange, handleSubmit, inputs}
}