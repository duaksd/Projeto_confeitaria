import estilos from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id={estilos.sobre} className={estilos.sobre}>
            <div className={estilos.center}>
                <h2>Sobre nós</h2>
                <p>Fundada em 2001, a Confeitaria La Delicatta nasceu 
                    do sonho de levar ao público o verdadeiro sabor 
                    da confeitaria artesanal. Com receitas que passam de geração em geração, 
                    nossos doces e bolos são feitos com ingredientes
                    selecionados e um toque de carinho em cada detalhe.</p>
            

            <div className={estilos.elemento_sobre}>
                <picture>
                    <img src='prateleira.jpg' alt='Prateleira'/>
                </picture>

            <div className={estilos.sobre_elementos}>
                <h4>Nossas filiais</h4>
                <p>Hoje temos cinco filiais pelo Brasil</p>
            </div>

            <div className={estilos.sobre_elementos}>
                <h4>Atendimento individual</h4>
                <p>Nossa equipe é treinada para te atender</p>
            </div>

            <picture>
                <img src='confeiteira1.jpg' alt='Atendimento' />
            </picture>
            </div>
            </div>

            </section>
    )
}