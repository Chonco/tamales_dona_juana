<template>
  <div class="home">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tamales Doña Juana</title>
    </head>
    <body>
      <div class="container">
        <header>
          <h1 class="elemento_header">Tamales Doña Juana</h1>
        </header>
        <div class="contenido">
          <div class="contenedor_articulos">
            <div class="card">
              <span class="titulo_articulo">Articulo 1</span>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Similique placeat dolores deleniti sunt, illum, ab corrupti
							vitae mollitia quia eius, blanditiis praesentium ratione
							ipsam maiores amet culpa illo. Ipsum, excepturi?
                </p>
            </div>

          </div>

          <aside class="contenedor_publicidad">
            <span>Aquí va la publicidad</span>
          </aside>

        </div>

        <footer>
          <span>Tamales Doña Juana © 2021</span>
        </footer>
      </div>
    </body>
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  
  }
}
</script>

<style>
html,body{
  margin: 0;
	padding: 0;
	font-family: "Noto Sans", sans-serif;
	height: 100%;
	color: #212529;
}

.container{
  display: grid;
  justify-items: center;
	height: 100%;
	max-width: 100%;
}

footer{
  align-self: end;
  display: flex;
	justify-content: center;
  color: #f0a70a;
  font-weight: bold;
  width: 85%;
	padding: 15px;
}
</style>