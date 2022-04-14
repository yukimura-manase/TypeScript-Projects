import { Link } from 'react-router-dom'

export const Nav: React.FC = ()=> {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Todo一覧画面</Link>
                </li>
                <li>
                    <Link to={'/create'}>Todo作成画面</Link>
                </li>
            </ul>
        </nav>
    )
}