// =========================================================
// EL SEÑOR AGROPECUARIO
// NOTICIAS
// =========================================================

const noticias = [

    {
        categoria: "🐄 Ganadería",
        titulo: "FEDEGÁN mantiene actualizadas las noticias del sector ganadero",
        resumen: "Información reciente sobre sanidad animal, vacunación y actualidad de la ganadería colombiana.",
        fuente: "FEDEGÁN",
        enlace: "https://www.fedegan.org.co/sala-de-prensa/ultimas-noticias"
    },

    {
        categoria: "🌾 Agricultura",
        titulo: "Las noticias y tendencias más importantes del agro colombiano",
        resumen: "Actualidad, negocios, mercados y oportunidades para el sector agropecuario colombiano.",
        fuente: "Agronegocios",
        enlace: "https://www.agronegocios.co/"
    },

    {
        categoria: "🚜 Actualidad",
        titulo: "Nuevas noticias del campo colombiano",
        resumen: "Conoce información relacionada con agricultura, ganadería, mercados y desarrollo rural.",
        fuente: "Agricultura y Ganadería",
        enlace: "https://www.agriculturayganaderia.com/"
    }

];


// =========================================================
// MOSTRAR NOTICIAS
// =========================================================

const contenedor = document.querySelector(".noticias-grid");


// Si existe el contenedor, cargamos las noticias

if (contenedor) {

    contenedor.innerHTML = "";

    noticias.forEach((noticia) => {

        const tarjeta = document.createElement("article");

        tarjeta.className = "noticia";

        tarjeta.innerHTML = `

            <div class="noticia-contenido">

                <span class="fecha">
                    ${noticia.fuente}
                </span>

                <span class="categoria-noticia">
                    ${noticia.categoria}
                </span>

                <h2>
                    ${noticia.titulo}
                </h2>

                <p>
                    ${noticia.resumen}
                </p>

                <a
                    href="${noticia.enlace}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="leer-mas"
                >
                    Leer noticia
                    <span>→</span>
                </a>

            </div>

        `;

        contenedor.appendChild(tarjeta);

    });

}