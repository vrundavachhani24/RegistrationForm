
const Input = ({ type, value, name, onchange, errors }) => {
    return (
        <div>
            <input type={type}
                value={value}
                name={name}
                onChange={onchange}
                errors={errors}
                className="border-1 p-2 w-sm"
            />
            {
                errors?.[name] !== "" && (
                    <div className="text-red-500">{errors?.[name]}</div>
                )
            }
        </div>
    )
}

export default Input