<template>
<div>
<profile :isMe="true" />
<h1>{{getUsername()}}</h1>
</div>
  
  
</template>

<script>
import Profile from "./Profile.vue";

export default {
  components: { Profile },
  data() {
    return {
      result: null,
    };
  }
};
</script>

<style>
</style>