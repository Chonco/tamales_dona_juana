<template>
	<div>
		<div class="about-general-container">
			<header class="acerca-de-nosotros-header">
				<div class="background-col-transbox">
					<h1 class="header-element">EL BLOG DE TAMALES DOÑA JUANITA</h1>
				</div>
			</header>

			<div class="about-content-page">
				<b-row>
					<b-col cols="9">
						<div class="articles-container">
							<div class="card about-custom-card">
								<center>
									<span class="content-title">Acerca de nosotros</span>
									<p class="contenido">
										Tamales Do&ntilde;a Juanita surgio como un
										peque&ntilde;o negocio desde 1982, gracias a la
										aceptaci&oacute;n de la comunidad nos expandimos
										hacia la atenci&oacute;n de eventos, en los cuales
										atendiamos con la mayor amabilidad e higiene, sin
										dejar de lado nuestro sas&oacute;n que ha
										conquistado los segundos corazones de las
										personas, es decir, los estomagos &#128523;. Ahora
										nos conectamos con nuestra comunidad a través de
										este espacio, "EL blog de tamales doña juanita",
										los usuarios comparten recetas, solicitan ayuda a
										otros usuarios y comparten experiencias con
										nuestras ricas degustaciones!. Así mismo tambien
										esperamos poder ayudarte en cualquier situación
										con respecto a nuestros tamales o servicio,
										ayudanos a mejorar para servirte mejor!.
									</p>
								</center>
							</div>
						</div>
					</b-col>

					<b-col cols="3">
						<img
							src="../assets/donaJuana.jpg"
							alt=""
							style="height: 400px"
						/>
					</b-col>
				</b-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
};
</script>

<style>
.contenido {
	font-family: "Montserrat", sans-serif;
	font-size: 20px;
	text-align: justify;
}
.about-general-container {
	width: 99%;
}
.acerca-de-nosotros-header {
	display: flex;
	flex-direction: column;
	justify-content: center;

	background-image: url("../assets/fondo_about.jpg");
	background-repeat: no-repeat;
	background-attachment: fixed;

	height: 30vh;
	width: 100%;
}

.header-element {
	text-align: center;
	color: black;
	font-size: 60px;
	font-weight: 300;
}

.about-content-page {
	width: 100%;
	margin-top: 2rem;

	display: flex;
}

.articles-container {
	flex: 3;
}

.about-custom-card {
	margin-bottom: 1rem;
	padding: 1rem;
	text-align: justify;
	margin-left: 1rem;
}

.content-title {
	border-bottom: 2px solid #e85d04;
	font-family: "Montserrat", sans-serif;
	font-size: 40px;
}
.background-col-transbox {
	/* margin: 30px; */
	background-color: #ffffff;
	/* border: 1px solid rgb(0, 0, 0); */
	opacity: 0.6;
	/*   padding: 5px; */
	padding-top: 10px;
}
</style>
