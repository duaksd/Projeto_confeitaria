import estilos from './Capa.module.css'

export default function Capa() {
    return (
        <section className={estilos.secao_capa}>
             <div className={estilos.capa}>
            <div className={estilos.texto}>
                <h2>Sua sobremesa favorita</h2>
                <h1>AINDA MELHOR</h1>
                </div>
            </div>
        </section>
    )
}