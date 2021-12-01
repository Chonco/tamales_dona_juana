<template>
	<section class="all-posts-page">
		<h2>Todos los posts publicados por nuestra comunidad</h2>

		<b-row class="posts-general-container">
			<b-col xl="4" lg="6" v-for="post in posts" :key="post.id">
				<b-card
					no-body
					class="post-card"
					border-variant="dark"
					@click="showPostDetails(post)"
				>
					<b-card-header class="post-card-header">
						<b-card-title class="mb-0"> {{ post.title }} </b-card-title>
					</b-card-header>
					<b-card-body>
						<p class="post-body">
							{{ post.text }}
						</p>

						<span> {{ post.author }} </span>
					</b-card-body>
				</b-card>
			</b-col>
		</b-row>
		<modal-post
			ref="modalPost"
			:authorName="authorToModal"
			:text="textToModal"
			:title="titleToModal"
		/>
	</section>
</template>

<script>
import {
	BCol,
	BRow,
	BCard,
	BCardBody,
	BCardTitle,
	BCardHeader,
} from "bootstrap-vue";
import ModalPost from "./ModalPost.vue";

export default {
	components: {
		BCol,
		BRow,
		BCard,
		BCardBody,
		BCardTitle,
		BCardHeader,
		ModalPost,
	},
	data() {
		return {
			posts: [
				{
					id: 1,
					title: "Lorem Test",
					text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Modi minima minus officia? Dolorum optio asperiores iure
							quas omnis eum iste dolore atque cum nemo accusantium quo,
							cupiditate animi distinctio! Dolores.`,
					author: "Bruno Hernández",
				},
			],
			titleToModal: "",
			textToModal: "",
			authorToModal: "",
		};
	},
	async created() {
		const articles = await this.getAllArticles();

		if (articles) this.formatArticles(articles);
	},
	methods: {
		async getAllArticles() {
			try {
				const articlesResponse = await this.axios.get("article");
				return articlesResponse.data;
			} catch (error) {
				console.log(error);
			}

			return null;
		},
		formatArticles(articles) {
			this.posts = articles.map((article) => {
				return {
					id: article.article.id,
					title: article.article.title,
					text: article.article.articleText,
					author: article.author.username,
				};
			});
		},
		showPostDetails(post) {
			this.titleToModal = post.title;
			this.textToModal = post.text;
			this.authorToModal = post.author;

			this.$refs.modalPost.show();
		},
	},
};
</script>

<style scoped>
.all-posts-page {
	height: 90%;
	width: 80%;
}
.posts-general-container {
	margin-top: 5rem;
}
.post-card {
	cursor: pointer;
}
.post-card-header {
	background-color: #fca311;
	color: #14213d;
}
.post-body {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3; /* number of lines to show */
	line-clamp: 3;
	-webkit-box-orient: vertical;
}
</style>
