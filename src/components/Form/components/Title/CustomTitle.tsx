import './CustomTitle.css'

interface Props {
    label: string;
}

const Title = ({ label }: Props) => {
    return (
         <h1 className="title">{label}</h1>
    )
}
  
export default Title
