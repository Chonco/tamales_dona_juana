<template>
  <div class="general-container">
       
    <div class="content-page">
      <b-row class="background-row">
        <b-col cols=2>
          
        </b-col>

        <b-col cols=8 class="background-col-transbox">

          <b-card class="loginForm">

            <b-row align-v="center" class="h-100">
              <b-col class="text-col">

                <label class="logLabel"> L O G I N </label><br><br>

                <label for="">Username: </label><br>
                <input type="text" id="lName" name="LName"><br>

                <label for="">Password: </label><br>
                <input type="text" id="lPass" name="LPass"><br>

              </b-col>
            </b-row> 
          </b-card>
        </b-col>
        <b-col cols=2>
          
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
};
</script>

<style>
.general-container {
  width: 99%;
  height: 70vh;
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
  
  background: url("./../assets/fondo_registro.jpg");
  /* border: 2px solid black; */
  background-size:cover;
}

.background-col-transbox {
  margin: 30px;
  background-color: #ffffff;
  border: 1px solid rgb(0, 0, 0);
  opacity: 0.6;
}

.text-col {
  margin: 5%;
  font-weight: bold;
  color: #000000;
  padding: 15PX;
}
.logLabel{
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
}

</style>