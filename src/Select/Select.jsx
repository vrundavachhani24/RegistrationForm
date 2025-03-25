
const Select = ({ onChange, value, errors, gender }) => {
    return (
        <div>
            <select onChange={onChange}
                value={value}
                errors={gender}
                className="border-1 p-2 w-sm mt-12">
                <option value="">please select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            {
                errors?.[gender] !== "" && (
                    <div className="text-red-500">{errors?.[gender]}</div>
                )
            }
        </div>
    )
}

export default Select