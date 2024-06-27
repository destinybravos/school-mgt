
const Button = ({className = '', props, children}) => {
  return (
    <button className={`bg-primary text-white py-1 px-3 rounded-md` + className} props>
        {children}
    </button>
  )
}

export default Button