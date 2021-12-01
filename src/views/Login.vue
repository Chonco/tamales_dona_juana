<template>
	<div class="login-general-container">
		<div class="login-content-page">
			<b-row class="background-row">
				<b-col cols="2"> </b-col>

				<b-col cols="8" class="background-col-transbox">
					<b-card class="loginForm">
						<b-row align-v="center" class="h-100">
							<b-col class="text-col">
								<label class="logLabel"> L O G I N </label><br /><br />

								<label for="lName">Username: </label><br />
								<input
									type="text"
									id="lName"
									v-model="username"
								/><br />

								<label for="lPass">Password: </label><br />
								<input
									type="password"
									id="lPass"
									v-model="password"
								/><br />

								<button @click="login" class="mt-4">
									Iniciar sesión
								</button>

								<br />
								<a @click="toRegister" class="link-to-register"
									>Crear cuenta</a
								>
							</b-col>
						</b-row>
					</b-card>
				</b-col>
				<b-col cols="2"> </b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import { setUserToken } from "../auth/utils";
export default {
	components: {},
	data() {
		return {
			username: "",
			password: "",
		};
	},
	methods: {
		toRegister() {
			this.$router.push({ name: "register" });
		},
		async login() {
			try {
				const tokenResponse = await this.axios.post("auth/login", {
					username: this.username,
					password: this.password,
				});

				if (!tokenResponse) {
					throw new Error("Error retrieving token");
				}

				setUserToken(tokenResponse.data.token);

				this.$router.push({ name: "Home" });
				this.$EventBus.$emit("changeUserSession");
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style>
.login-general-container {
	width: 95%;
	height: 70vh;
	background: rgba(255, 115, 0, 0.842);
}

.login-content-page {
	width: 100%;
	margin-top: 2.5rem;
}

.loginForm {
	height: 50vh;
	align-content: center;
	display: flex;
}

.background-row {
	background: url("./../assets/fondo_registro.jpg");
	/* border: 2px solid black; */
	background-size: cover;
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
	padding: 15px;
}
.logLabel {
	font-family: "Montserrat", sans-serif;
	font-size: 50px;
}
.link-to-register {
	cursor: pointer;
}
</style>
