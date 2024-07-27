
const Button = ({className = '', props, disabled = false, children}) => {
    return (
        <button
            {...props}
            className={
                `inline-flex outline-none items-center px-4 py-2 bg-primary font-semibold text-xs uppercase tracking-widest hover:bg-slate-700 active:bg-slate-900 active:text-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button