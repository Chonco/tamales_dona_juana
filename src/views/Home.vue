<template>
  <div class="home">
    <div class="container">
      <header>
        <h1 class="elemento_header">Tamales Doña Juana</h1>
      </header>
      <div class="contenido">
        <div class="contenedor_articulos">
          <div class="card" id="C1">
            <span class="titulo_articulo"
              ><a href="" class="a_card">nuestros tamales</a></span
            >
            <p>
              Conoce a cerca de nuestra tradicional receta para concinar tamales
              de manera tradicional. ¡Justo como tu abuelita los haria!
            </p>
          </div>

          <div class="card" id="C2">
            <span class="titulo_articulo"
              ><a href="" class="a_card">Sobre nuestros postres</a></span
            >
            <p>
              ¿Interesado en algo dulce después de comer? Conoce nuestra
              variedad de postres tradicionales.
            </p>
          </div>

          <div class="card" id="C3">
            <span class="titulo_articulo"
              ><a href="" class="a_card">Especialidades de la casa</a></span
            >
            <p>Explora las diversas alternativas de nuestros productos.</p>
          </div>
        </div>

        <aside class="contenedor_publicidad"></aside>
      </div>

      <footer>
        <span>Tamales Doña Juana © 2021</span>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans", sans-serif;
  height: 100%;
  color: #212529;
}

.container {
  display: grid;
  justify-items: center;
  height: 100%;
  max-width: 100%;
}

header {
  background-image: url("../assets/header_tamal2.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 84vh;
  /* CSS para la fuente*/
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.elemento_header {
  color: rgb(255, 255, 255);
  font-size: 85px;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: "Bilbo Swash Caps", cursive;
  font-size: 100px;
  transition: all 0.5s;
}

.elemento_header:hover {
  color: #dd8501;
}

.contenido {
  margin-top: 3rem;
  display: flex;
  width: 75%;
}

.contenedor_articulos {
  flex: 3;
}

.card {
  margin-right: 10rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid #ced4da;
  height: 100px;
}

#C1 {
  background-image: url("../assets/card1.png");
  background-repeat: no-repeat;
}

#C2 {
  background-image: url("../assets/card2.png");
  background-repeat: no-repeat;
}

#C3 {
  background-image: url("../assets/card3.png");
  background-repeat: no-repeat;
}

.titulo_articulo {
  border-bottom: 2px solid #ff7b00;
  font-family: "Kaushan Script", cursive;
  font-size: 25px;
  color: #522405;
}

.contenedor_publicidad {
  flex: 1;
  margin-left: 1rem;
  border-radius: 15px;
  background-image: url("../assets/publicidad_ejemplo.png");
}

p {
  color: #000000;
  font-family: "Eczar", serif;
}

footer {
  align-self: end;
  display: flex;
  justify-content: center;
  color: #f0a70a;
  font-weight: bold;
  width: 85%;
  padding: 15px;
  font-family: "Bilbo Swash Caps", cursive;
  font-size: 25px;
}

.a_card {
  text-decoration: none;
  transition: all 0.5s;
  color: #522405;
}
.a_card:hover {
  font-size: 26px;
  color: #c45004;
}
</style>