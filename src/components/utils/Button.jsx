
const Button = ({className = '', props, children}) => {
  return (
    <button className={`bg-primary hover:bg-[#445858] hover: text-white py-1 px-3 rounded-md` + className} props>
        {children}
    </button>
  )
}

export default Button