import cx from 'classnames'
import PropTypes from 'prop-types'; //ES6

const Button = (props) => {
    const {children, primary, secondary, warning, danger, success, rounded, outline} = props

    const baseClass = "flex items-center px-8 py-3 border"
    return <button className={cx(baseClass, {
        // color varients, pick one
        'bg-blue-500 border-blue-500 text-white': primary,
        'bg-gray-900 border-gray-900 text-white': secondary,
        'bg-green-500 border-green-500 text-white': success,
        'bg-orange-400 border-orange-500 text-white': warning,
        'bg-red-600 border-red-600 text-white': danger,
        // can add outline and other styling props
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-orange-400': outline && warning,
        'text-red-600': outline && danger,
    })}>{children}</button>
}

Button.propTypes = {
    //validating props by type. this is the most common reason using this libray
    //typescript is also used for this. and a lot more
    // primary: PropTypes.bool,
    checkVariationValue: ({primary, secondary, warning, danger, success}) => {
        const count = 
        Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!danger)
        + Number(!!success)

        console.log(count)

        if (count > 1){
            return new Error('silly goose. Only one of [primary, secondary, warning, danger, success] can be true')
        }
    }
}

export default Button