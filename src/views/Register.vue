<template>

    <div class="general-container">
     <header>
       <h1 class="tituloRegistro">UNETE A NUESTRA COMUNIDAD</h1>
    </header>

    <div class="content-page">
      <b-row >
        <b-col cols=2>
          <img src="../assets/senioRegistro.jpg" alt="">
        </b-col>

        <b-col cols=8 >          
            <b-row align-v="center" class="h-100">
              <div class="background-row">
                <b-col class="text-col">
                  <div class="background-col-transbox">
                    <label class="regLabel"> R E G I S T E R </label><br><br><br>
                    <label for="">Username: </label><br>
                    <input type="text" id="rUser" name="RUser"><br>
                    <label for="">Email: </label><br>
                    <input type="text" id="rEmail" name="REmail"><br>
                    <label for="">Password: </label><br>
                    <input type="text" id="rPass" name="RPass"><br>
                  </div>
                </b-col>
              </div>
            </b-row> 
        </b-col>
       
        <b-col cols=2>
          
        </b-col>

      </b-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.general-container {
  width: 100%;
  height: 100%;
  background: rgba(255, 115, 0, 0.842);
}

.content-page {
  width: 100%;
  margin-top: 2.5rem;
}

.loginForm{
  height: 50vh;
  align-content: center;
  display: flex;
}

.background-row {
  background: url("./../assets/fondo2_registro.jpg");
  /* border: 2px solid black; */
  background-size:cover;
}

.background-col-transbox {
  margin: 30px;
  background-color: #ffffff;
  border: 1px solid rgb(0, 0, 0);
  opacity: 0.6;
  padding: 30px;
}

.text-col {
  margin: 5%;
  font-weight: bold;
  color: #000000;
  padding: 15PX;
}
.regLabel{
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
}
.tituloRegistro{
  padding-top: 25px;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Syncopate', sans-serif;
  font-size: 40px;
  color:#ffffff;
}
</style>