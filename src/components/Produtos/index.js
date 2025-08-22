import estilos from './Produtos.module.css'

export default function Produtos() {
    return (
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Produtos</h2>
                <p>
                    Conheça nossos deliciosos produtos, feitos com ingredientes frescos e muito amor para tornar seus momentos ainda mais especiais.
                    <br />
                    Autenticamente artesanal | Sabor que conquista | Envio rápido
                </p>

                {/*produtos*/}
                <div className={estilos.doce_img}>
                    <div className={estilos.card_doce}>
                        <span className={estilos.selo}>Mais Vendidos</span>
                        <h3>Bolo <br /> Buttercream Floral</h3>
                        <picture>
                            <img src="./bolo1.png" alt="Bolo redondo de baunilha com cobertura de buttercream em espiral e flores de açúcar sobre prato cerâmico, fundo rosa pastel." />
                        </picture>
                        <p className={estilos.preco}>R$ 68,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_doce}>
                        <span className={estilos.seloNovo}>Novos</span>
                        <h3>Muffin <br /> Frutas Vermelhas</h3>
                        <picture>
                            <img src="./muffin1.png" alt="Muffin dourado com topo crocante e frutas vermelhas, servido em forminha branca sobre fundo rosa pastel." />
                        </picture>
                        <p className={estilos.preco}>R$ 14,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_doce}>
                        <h3>Cupcake de Framboesa <br /> com Buttercream</h3>
                        <picture>
                            <img src="./cupcake1.png" alt="Cupcake dourado com cobertura de buttercream rosa em espiral, decorado com framboesa e pérolas de açúcar sobre fundo rosa pastel." />
                        </picture>
                        <p className={estilos.preco}>R$ 16,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_doce}>
                        <h3>Macaron <br /> com Recheio Cremoso</h3>
                        <picture>
                            <img src="./macaron1.png" alt="Macaron rosa com recheio cremoso entre duas cascas lisas e arredondadas, fundo rosa pastel." />
                        </picture>
                        <p className={estilos.preco}>R$ 6,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                </div>
            </div>
        </section>
    )
}