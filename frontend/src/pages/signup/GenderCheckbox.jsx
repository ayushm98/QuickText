const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className="flex gap-4">
            <div>
                <label className="flex items-center py-2">
                    <span className="mr-2">Male</span>
                    <input
                        type="checkbox"
                        placeholder="Enter username"
                        className={`w-full h-10 py-1 px-4 border-2  rounded-md ${selectedGender === "male" ? "selected" : ""}`}
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div>
                <label className="flex items-center py-2">
                    <span className="mr-2">Female</span>
                    <input
                        type="checkbox"
                        placeholder="Enter username"
                        className={`w-full h-10 py-1 px-4 border-2  rounded-md ${selectedGender === "female" ? "selected" : ""}`}
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox