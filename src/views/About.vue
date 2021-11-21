<template>
  
  <div>

      <div class="general-container">
			
			<header>
				<h1 class="header-element" >Acerca de nosotros</h1>
			</header>

			<div class="content-page">

                <b-row>
                    <b-col cols="3">

						<div class="card">
                            <b-link href="#nuestraHistoria" style="text-decoration:none">NUESTRA HISTORIA</b-link><br>
                            <b-link href="#ahora" style="text-decoration:none">TAMALES DO&Ntilde;A JUANA AHORA</b-link><br>
                            <b-link href="#mision" style="text-decoration:none">MISI&Oacute;N</b-link><br>
                            <b-link href="#vision" style="text-decoration:none">VISI&Oacute;N</b-link>
                        </div>

                    </b-col>

                    <b-col cols="6">
                        
                        <div class="articles-container">
					<div class="card" id="nuestraHistoria">
						<span class="content-title">NUESTRA HISTORIA</span>
						<p>
							Tamales Do&ntilde;a Juanita surgio como un peque&ntilde;o negocio desde 1982,
                            gracias a la aceptaci&oacute;n de la comunidad nos expandimos hacia la atenci&oacute;n
                            de eventos, en los cuales atendiamos con la mayor amabilidad e higiene, sin dejar de lado nuestro
                            sas&oacute;n que ha conquistado los segundos corazones de las personas, es decir, los 
                            estomagos &#128523;.
						</p>
					</div>
                    <div class="card" id="ahora">
						<span class="content-title">TAMALES DO&Ntilde;A JUANA AHORA</span>
						<p>
							Hoy en d&iacute;a Tamales Do&ntilde;a Juanita cuenta con m&aacute;s de 40 sucursales por
                            toda la zona metropolitana de Guadalajara, con servicio para llevar o para consumir en 
                            cada uno de nuestros locales, contamos con las instalaciones ideales para hacer su 
                            estadia de lo m&aacute;s placentera; en nuestro menu encontraras adem&aacute;s de nuestra
                            amplia gama de diferentes tamales, bebidas ideales para su acompa&ntilde;amiento y de
                            deliciosos postres.
						</p>
					</div>
                    <div class="card" id="mision">
						<span class="content-title">MISI&Oacute;N</span>
						<p>
							Tamales Do&ntilde;a Juanita tiene el objeto de continuar con su expansi&oacute;n, llegar
                            a conquistar m&aacute;s estomagos dentro de la republica, no solo de la zona metropolitana 
                            de Guadalajara y ampliar los diversos estilos de tamales que se encuentran en todo el Pa&iacute;s.
						</p>
					</div>
                    <div class="card" id="vision">
						<span class="content-title">VISI&Oacute;N</span>
						<p>
							Tamales Do&ntilde;a a trav&eacute;s de la primera expansi&oacute;n hacia el resto del estado de 
                            Jalisco adquirir&aacute; las diversas variantes de estilos de tamales del lugar, contratando 
                            cocineros o cocineras que realcen la diversidad de cada uno de los nuevos lugares.
						</p>
					</div>
				</div>

                    </b-col>

                    <b-col cols="3">

                        <aside class="advertising-container">
                            <img src="../assets/donaJuana.jpg" alt="" style="height:600px;">
                        </aside>

                    </b-col>
                </b-row>

				

			</div>
			<footer>
				<span>Tamales Doña Juana © 2021</span>
			</footer>
		</div>


  </div>

</template>


<script>

import { BLink } from 'bootstrap-vue'


export default 
{
    components:
    {
        BLink, 
    },
}
</script>

<style>



</style>
