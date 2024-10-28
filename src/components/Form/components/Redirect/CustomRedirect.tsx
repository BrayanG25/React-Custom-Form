import './CustomRedirect.css'

interface Props {
  label: string;
  description: string;
  href: string;
}

const Redirect = ({label, description, href}: Props) => {
  return (
    <p className="container">
      {description} <a href={href} className="link">{label}</a>
    </p>
  )
}

export default Redirect
