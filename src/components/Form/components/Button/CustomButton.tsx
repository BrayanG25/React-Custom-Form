import './CustomButton.css'

interface Props {
    name: string;
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const CustomButton = ({ name, label, type = "button", onClick }: Props) => {
    return (
        <button name={name} type={type} onClick={onClick} className="custom-button">
            {label}
        </button>
    )
}

export default CustomButton