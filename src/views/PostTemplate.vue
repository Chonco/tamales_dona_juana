<template>
	<section class="post-template-general-container">
		<h3 v-if="edit">Editar</h3>
		<h3 v-else>Crear</h3>

		<b-row align-h="center" class="mt-4">
			<b-col xl="7" lg="10" md="12">
				<b-form-group label="Título del post" label-for="post-title-input">
					<b-form-input id="post-title-input" v-model="title" />
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center" class="mt-4">
			<b-col xl="7" lg="10" md="12">
				<b-form-group label="Texto del post" label-for="post-text-input">
					<b-form-textarea
						id="post-text-input"
						v-model="text"
						rows="15"
						no-resize
					/>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center" class="mt-4">
			<b-col xl="7" lg="10" md="12">
				<b-button variant="success" @click="savePost"> Guardar </b-button>
			</b-col>
		</b-row>
	</section>
</template>

<script>
import {
	BCol,
	BRow,
	BFormGroup,
	BFormInput,
	BButton,
	BFormTextarea,
} from "bootstrap-vue";
export default {
	components: {
		BCol,
		BRow,
		BFormGroup,
		BFormInput,
		BButton,
		BFormTextarea,
	},
	props: {
		edit: {
			type: Boolean,
			default: false,
		},
		postId: {
			type: Number,
			default: -1,
		},
		prevTitle: {
			type: String,
			default: "",
		},
		prevText: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			title: "",
			text: "",
		};
	},
	created() {
		if (this.edit) {
			this.title = this.prevTitle;
			this.text = this.prevText;
		}
	},
	methods: {
		async savePost() {
			if (this.edit) {
				await this.updatePost();
			} else {
				await this.createPost();
			}
		},
		async createPost() {
			try {
				const postCreateResponse = await this.axios.post("article", {
					title: this.title,
					articleText: this.text,
				});

				if (!postCreateResponse) {
					throw new Error("Error saving article");
				}

				this.$router.push({ name: "posts" });
			} catch (error) {
				console.log(error);
			}
		},
		async updatePost() {
			try {
				const postUpdateResponse = await this.axios.put("article", {
					articleId: this.postId,
					title: this.title,
					articleText: this.text,
				});

				if (!postUpdateResponse) {
					throw new Error("Error saving article");
				}

				this.$router.push({ name: "posts" });
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style scoped>
.post-template-general-container {
	width: 90%;
}
</style>
