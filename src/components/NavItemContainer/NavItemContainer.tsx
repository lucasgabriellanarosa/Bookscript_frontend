import { NavItem } from '../NavItem/NavItem'

export const NavItemContainer = () => {
    return (
        <nav className='my-auto'>
            <ul className='flex flex-col'>
                <NavItem
                    icon='home'
                    spanText='Início'
                />
                <NavItem
                    icon='book'
                    spanText='Meus Livros'
                />
                <NavItem
                    icon='heart'
                    spanText='Doações'
                />

            </ul>

        </nav>
    )
}
