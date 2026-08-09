fetch("Noticias.json")
  .then(response => response.json())
  .then(data => {

    const contenedor = document.getElementById("contenedor-noticias");

    contenedor.innerHTML = `
      <div class="noticias-grid"></div>
    `;

    const grid = document.querySelector(".noticias-grid");

    data.forEach(noticia => {

      grid.innerHTML += `
        <article class="noticia">

          <div class="noticia-imagen">
            <img src="${noticia.imagen}" alt="${noticia.titulo}">
            <span class="categoria">${noticia.categoria}</span>
          </div>

          <div class="noticia-contenido">

            <span class="fecha">
              ${noticia.fuente}
            </span>

            <h2>${noticia.titulo}</h2>

            <p>${noticia.descripcion}</p>

            <a href="${noticia.url}"
               target="_blank"
               class="leer-mas">
               Leer noticia <span>→</span>
            </a>

          </div>

        </article>
      `;

    });

  })
  .catch(error => {
    console.error("Error cargando noticias:", error);
  });
