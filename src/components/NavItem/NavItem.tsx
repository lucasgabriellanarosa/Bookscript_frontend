import { NavItemProps } from "../../@types/props"
import { IoBookOutline, IoHeartOutline, IoHomeOutline, IoPersonOutline } from 'react-icons/io5'

export const NavItem = ({ icon, spanText }: NavItemProps) => {

    const renderIcon = () => {
        switch (icon) {
            case "heart":
                return <IoHeartOutline />
            case "book":
                return <IoBookOutline />
            case "home":
                return <IoHomeOutline />
            case "user":
                return <IoPersonOutline />            
            default:
                return null
        }
    }

    return (
        <li className="flex flex-row items-center text-2xl gap-2 text-white">
            {
                renderIcon()
            }
            <span>{spanText}</span>
        </li>
    )
}
