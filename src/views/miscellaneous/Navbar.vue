<template>
	<div class="navbar">
		<img
			src="../../assets/logo.jpg"
			alt="Logo Tamales Doña Juana"
			class="logo navbar-item"
			@click="toHome"
		/>
		<div class="navbar-items">
			<span class="navbar-item link" @click="toAbout"> Acerca de </span>
			<span class="navbar-item link" @click="toList"> Posts </span>
			<span class="navbar-item link" @click="toCreatePost" v-if="isLoggedIn">
				Crear Post
			</span>
			<span @click="toMe" v-if="isLoggedIn">
				<UserIcon class="navbar-item cart-icon" />
			</span>
			<span @click="logout" v-if="isLoggedIn">
				<LogoutIcon class="navbar-item cart-icon" />
			</span>
			<span @click="login" v-else>
				<LoginIcon class="navbar-item cart-icon" />
			</span>
		</div>
	</div>
</template>

<script>
import LogoutIcon from "./LogoutIcon.vue";
import LoginIcon from "./LoginIcon.vue";
import UserIcon from "./UserIcon.vue";
import { isUserLoggedIn } from "../../auth/utils";

export default {
	components: {
		LogoutIcon,
		LoginIcon,
		UserIcon,
	},
	data() {
		return {
			isLoggedIn: false,
		};
	},
	methods: {
		toHome() {
			this.$router.push({ name: "Home" });
		},
		toAbout() {
			this.$router.push({ name: "About" });
		},
		logout() {
			this.$router.push({ name: "logout" });
		},
		login() {
			this.$router.push({ name: "login" });
		},
		toList() {
			this.$router.push({ name: "posts" });
		},
		toCreatePost() {
			this.$router.push({ name: "create-post" });
		},
		toMe() {
			this.$router.push({ name: "me" });
		},
	},
	created() {
		this.isLoggedIn = isUserLoggedIn();
		this.$EventBus.$on("changeUserSession", () => {
			this.isLoggedIn = isUserLoggedIn();
		});
	},
};
</script>

<style scoped>
.navbar {
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.logo {
	height: 150px;
}
.navbar-items {
	display: flex;
	align-items: center;
}
.navbar-item {
	cursor: pointer;
	transition: all 0.5s;
	margin-right: 10px;
}
.navbar-item:last-child {
	margin-left: 15px;
	margin-right: 0;
}
.navbar-item.link {
	padding: 0.5rem;
	border-radius: 8px;
}
.navbar-item.link:hover {
	background-color: #fca311;
	color: #14213d;
}
.cart-icon:hover {
	fill: #fca311;
}
</style>
