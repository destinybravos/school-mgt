

const SelectInput = ({className = '', options = [], ...props}) => {
    return (
        <select className={`flex-grow bg-transparent py-2 px-3 focus:outline-none focus:border-none focus:ring-0 active:border-none active:ring-0` + className} {...props} >
            {options.length > 0 && options.map((data) => (
                <option value={data}> {data} </option>
            ))}
        </select>
    )
}

export default SelectInput