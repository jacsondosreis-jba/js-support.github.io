
import './main_servicos.css';

function MainServicos() {
    return (
            <section id="servicos">
        <h2>Nossos Serviços de TI</h2>
        <div class="grid-servicos">
            <div class="card">
                <h3>🖥️ Suporte Técnico</h3>
                <p>Assistência completa para usuários e resolução de problemas de hardware e software.</p>
            </div>
            <div class="card">
                <h3>☁️ Cloud Computing</h3>
                <p>Migração e gerenciamento de servidores em nuvem com máxima segurança.</p>
            </div>
            <div class="card">
                <h3>🔒 Segurança de Dados</h3>
                <p>Proteção de redes contra invasões e implementação de políticas de backup.</p>
            </div>
            <div class="card">
                <h3>⚙️ Infraestrutura</h3>
                <p>Montagem e manutenção de Data Centers e cabeamento estruturado.</p>
            </div>
        </div>
    </section>


    )
}

                   
export default MainServicos;