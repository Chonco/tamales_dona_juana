<template>
	<section></section>
</template>

<script>
import { deleteUserSession } from "../auth/utils";
export default {
	created() {
		deleteUserSession();

		this.$router.push({ name: "Home" });
		this.$EventBus.$emit("changeUserSession");
	},
};
</script>

<style></style>
