<template>
   <div class="profile">
     <profile :isMe="true" />
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
import Profile from "./Profile.vue";

export default {
  components: { Profile },
};
</script>

<style>
</style>