import { Control, Controller, FieldError, FieldValues, Path, PathValue } from "react-hook-form"
import './CustomInput.css'

interface Props<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    type?: string;
    error?: FieldError;
    placeholder?: string;
    defaultValue?: PathValue<T, Path<T>>;
}

const CustomInput = <T extends FieldValues>({ name, control, label, type = "text", error, placeholder, defaultValue}: Props<T>) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller 
                name={name} 
                control={control} 
                defaultValue={defaultValue}
                render={({ field}) => 
                    <input 
                        id={name} 
                        type={type} 
                        placeholder={placeholder}
                        {...field} 
                        className={`input-field ${error ? "is-invalid" : ""}`}
                    />
            }/>
            {error ? (
                <p className="error-message">{error.message}</p>
            ) : (
                <div className="placeholder-space"></div>
            )}
        </div>
    )
}

export default CustomInput
