<template>
  <div class="profile">
    <div class="profile_generalcontainer">
      <div class="profile_header">
        <header >
          <h1 class="elemento_header">Username</h1>
        </header>
      </div>
      <div class="profile_section">
        <div class="username_title">
          <h1>User information</h1>
        </div>
        <b-row class="contenido mt-4 match-height">
          <b-col cols= 3 class="profile_pic">
            <img
            class="profile_picture" 
            src="../assets/profile_pic_default.png" alt="profile_pic"
            width="120px">
          </b-col>
          <b-col cols=9 class="profile_info">
            <div class="profile_posts">
              <h3 class="postlist-header">Posts</h3>
              <ul class="post_list">
                <li class="list_item">
                    <a href="" class="a-post">Tacos de puerco</a>
                </li>
                <li class="list_item">
                  <a href="" class="a-post">Pizza casera</a>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
 </div>

</template>

<script>

export default {
  props: {
    isMe: {
      type: Boolean,
      default: false
    }
  }
};
/*
var post_list = new Vue({
  el: '#post_list',
  data: {
    items: [
      { mensaje: 'Taquitos de puerco'},
      { mensaje: 'Albondigas'}
    ]
  }
});
*/
</script>

<style>

.profile{
  width: 100%;
}

.profile_generalcontainer{
  display: grid;
  justify-items: center;
  height: 100%;
  max-width: 100%;
}

.profile_section{
  height: 100%;
  width: 80%;
  padding: 1.5rem;
  border-radius: 15px;
  background-color: rgb(233, 233, 233);
}

.profile_header{
  width: 100%;
  height: 35vh;
  background-image: url("../assets/header_tamal2.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* CSS para la fuente*/
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
}

.profile_pic{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.profile_picture{
  display: flex;
  border-radius: 15px;
  align-self: center;
}

.profile_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(228, 222, 222);
  border-radius: 20px;
}

.contenido {
  width: 100%;
}

.postlist-header{
  border-bottom: 2px solid #ff7b00;
  font-family: "Kaushan Script", cursive;
  font-size: 25px;
  color: #522405;
  max-width: 100%;
}

.elemento_header{
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-family: "Bilbo Swash Caps", cursive;
  font-size: 80px;
  transition: all 0.5s;
  align-self: center;
}

.elemento_header:hover {
  color: #f8f2e9;
  font-size: 90px;
}

.post_list{
  color: #000000;
  font-family: "Eczar", serif;
  text-decoration: none;
  margin-top: 10px;
  align-items: center;
}

.username_title{
  border-bottom: 2px solid #ff7b00;
  font-family: "Kaushan Script", cursive;
  font-size: 25px;
  color: #522405;
}

.list_item{
  list-style-type: none;
  text-align-last: left;
}

.a-post{
  text-decoration: none;
  transition: all 0.5s;
  color: #522405;
  font-family: "Eczar", serif;
  font-size: 20px;
}
.a-post:hover{
font-size: 30px;
}
</style>