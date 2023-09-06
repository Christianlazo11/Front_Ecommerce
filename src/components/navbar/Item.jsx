import {Link} from "react-router-dom";

export const Item = ({name, link}) => {
  return (
    <Link className="block ml-3" to={link}>{name}</Link>
  )
}
