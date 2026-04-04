
        

            import './main_contatos.css';

         

function MainContatos(){
    return(

         <section id="contatos" class="contatos">

                    <h2>Fale com a JS-Support</h2>
                    <p><i class="fas fa-phone"></i> +55 (21) 97901-6886</p>
                    <p><i class="fas fa-envelope"></i> contato@jssupport.com.br</p>
                    <p><i class="fas fa-map-marker-alt"></i> Rio de Janeiro, RJ - Unidade Data Center</p>
                    <br></br>
                    <p>Solicite um orçamento para sua empresa.</p>
                    
               <form>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required></input>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required></input>

                    <label for="email">Contato:</label>
                    <input type="email" id="email" name="email" required></input>
                    
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" required></textarea>
                    <button type="submit" class="btn">Enviar Mensagem</button>

               </form>
           </section>
      
         
    )
}

export default MainContatos;