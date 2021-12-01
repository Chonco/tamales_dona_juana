<template>
	<post-template
		:edit="true"
		:prevText="text"
		:prevTitle="title"
		:postId="postId"
	/>
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
		text: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>
