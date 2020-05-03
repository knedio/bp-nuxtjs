<template>
	<div class="flex bg-gray-200 h-screen items-stretch">
		<div>
			<button type="submit"
				class="text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-none"
				@click="onLogout()"
			>
				Logout
			</button>
		</div>
	</div>
</template>
<style lang="css" scoped>
</style>
<script>

	export default {
		middleware: ['auth-logged'],
		components: {
		},
		data() {
			return {
			}
		},
		mounted(){
		},
		methods: {
			onLogout()
			{
                this.$auth.logout().then( res => {
                    this.$router.push('/login')
                }).catch(err => {
                    console.log(err)
                });
			}
		}
	}
</script>