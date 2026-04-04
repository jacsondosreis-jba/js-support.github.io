import './header.css'

function Header(){
    return(
     <header>
        <div class="logo">JS-SUPPORT</div>
        <nav>
            <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contatos">Contatos</a></li>
            </ul>
        </nav>
    </header>

    )
}

export default Header;