<template>
	<div class="register-general-container">
		<header>
			<h1 class="tituloRegistro">UNETE A NUESTRA COMUNIDAD</h1>
		</header>

		<div class="register-content-page">
			<b-row>
				<b-col cols="2">
					<img src="../assets/senioRegistro.jpg" alt="" />
				</b-col>

				<b-col cols="8">
					<b-row align-v="center" class="h-100">
						<div class="background-row">
							<b-col class="text-col">
								<div class="background-col-transbox">
									<label class="regLabel"> R E G I S T E R </label
									><br /><br /><br />
									<label for="rUser">Username: </label><br />
									<input
										type="text"
										id="rUser"
										v-model="username"
									/><br />
									<label for="rEmail">Email: </label><br />
									<input
										type="text"
										id="rEmail"
										v-model="email"
									/><br />
									<label for="rPass">Password: </label><br />
									<input
										type="password"
										id="rPass"
										v-model="password"
									/><br />
									<button class="mt-3" @click="saveUser">
										Enviar
									</button>
								</div>
							</b-col>
						</div>
					</b-row>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import { setUserToken } from "../auth/utils";

export default {
	data() {
		return {
			username: "",
			email: "",
			password: "",
		};
	},
	methods: {
		async saveUser() {
			if (
				this.username.trim().length == 0 ||
				this.email.trim().length == 0 ||
				this.password.trim().length == 0
			) {
				return;
			}

			try {
				const saveUserResponse = await this.axios.post("auth/register", {
					email: this.email,
					username: this.username,
					password: this.password,
				});

				if (!saveUserResponse) {
					throw new Error("Error saving user");
				}

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
.register-general-container {
	width: 95%;
	height: 100%;
	background: rgba(255, 115, 0, 0.842);
}

.register-content-page {
	width: 100%;
	margin-top: 2.5rem;
}

.loginForm {
	height: 50vh;
	align-content: center;
	display: flex;
}

.background-row {
	background: url("./../assets/fondo2_registro.jpg");
	/* border: 2px solid black; */
	background-size: cover;
}

.background-col-transbox {
	margin: 30px;
	background-color: #ffffff;
	border: 1px solid rgb(0, 0, 0);
	opacity: 0.6;
	padding: 30px;
}

.text-col {
	margin: 5%;
	font-weight: bold;
	color: #000000;
	padding: 15px;
}
.regLabel {
	font-family: "Montserrat", sans-serif;
	font-size: 50px;
}
.tituloRegistro {
	padding-top: 25px;
	font-family: "Montserrat", sans-serif;
	font-family: "Syncopate", sans-serif;
	font-size: 40px;
	color: #ffffff;
}
</style>
