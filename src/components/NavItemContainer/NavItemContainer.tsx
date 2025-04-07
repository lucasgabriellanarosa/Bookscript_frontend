import { IoBookOutline, IoHeartOutline, IoHomeOutline } from 'react-icons/io5'

export const NavItemContainer = () => {
    return (
        <nav>
            <ul>

                <li>
                    <IoHomeOutline />
                    <span>Início</span>
                </li>

                <li>
                    <IoBookOutline />
                    <span>Meus Livros</span>
                </li>

                <li>
                    <IoHeartOutline />
                    <span>Doações</span>
                </li>

            </ul>

        </nav>
    )
}
