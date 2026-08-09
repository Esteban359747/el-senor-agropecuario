fetch("Noticias.json")
  .then(response => response.json())
  .then(data => {

    const contenedor = document.getElementById("contenedor-noticias");

    contenedor.innerHTML = "";

    data.forEach(noticia => {

      contenedor.innerHTML += `
        <article class="card-noticia">

          <div class="categoria">
            ${noticia.fuente} • ${noticia.categoria}
          </div>

          <h3>${noticia.titulo}</h3>

          <p>${noticia.descripcion}</p>

          <a href="${noticia.url}" target="_blank">
            Leer noticia →
          </a>

        </article>
      `;
    });

  })
  .catch(error => {
    console.error("Error cargando noticias:", error);
  });
