<template>
	<b-modal
		v-model="showModal"
		class="post-modal"
		hide-header-close
		hide-footer
		:title="title"
        centered
        scrollable
	>
		<p>
			{{ text }}
		</p>

		<span> {{ authorName }} </span>
	</b-modal>
</template>

<script>
import { BModal } from "bootstrap-vue";
export default {
	components() {
		BModal;
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		authorName: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			showModal: false,
		};
	},
	methods: {
		show() {
			this.showModal = true;
		},
	},
};
</script>

<style>
.btn {
	font-family: Avenir, Helvetica, Arial, sans-serif !important;
}
</style>
