<template>
	<post-template :edit="true" :prevText="text" :prevTitle="title" />
</template>

<script>
import PostTemplate from "./PostTemplate.vue";

export default {
	components: {
		PostTemplate,
	},
	props: {
		postId: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
      title: '',
      text: ''
		};
	},
  async created() {

  },
	methods: {
    async getPost() {
      
    }
	},
};
</script>

<style></style>
