<template>
	<div id="login-form-component">
        <form
            class="container"
            @submit.prevent=""
        >
            <div class="text-center mb-2" v-if="error">
                <span class="text-red-500 bold ">
                    {{ error }}
                </span>
            </div>
            <div>
                <InputField
                    class="m-2"
                    label="Email Address"
                    id="email"
                    type="email"
                    :errors="errorMessages.email"
                    v-model="loginForm.email"
                />
                <InputField
                    class="m-2"
                    label="Password"
                    id="password"
                    type="password"
                    :errors="errorMessages.password"
                    v-model="loginForm.password"
                />
            </div>
            <div class="flex justify-between">
                <button type="submit"
                    class="ml-auto text-sm font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-none"
                    :disabled="submitting"
                    @click="onSubmit()"
                >
                    Sign in
                </button>
            </div>
        </form>
    </div>
</template>
<style lang="css" scoped>
    .container {
		box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.175);
        border-radius: 8px;
		border: 1px solid rgba(204,204,204, 0.6);
		padding: 20px 35px;
	}
</style>
<script>
	import InputField from '~/components/Form/InputField';

	export default {
		components: {
			InputField,
        },
        props: ['signInType'],
		data() {
			return {
				submitting: false,
                error: '',
                errorMessages: [],
				loginForm: {
					email: '',
                    password: '',
				}
			}
		},
		mounted(){

		},
		methods: {
            onSubmit()
            {
                this.submitting = true;
                // this.$valida
                this.$auth.loginWith('local', {
                    data: {
                        email: this.loginForm.email,
                        password: this.loginForm.password
                    }
                }).then( (response) => {
                    this.submitting = false;
                    this.$router.push('/dashboard')
                }).catch( (err) => {
                    this.submitting = false;
                    if(err?.response?.status == 422) {
                        const { status, data } = err.response;
                        this.errorMessages = [];
                        this.errorMessages = data.errors;
                    } else {
                        this.error = 'Sorry! The email or password is incorrect.'
                    }
                })
            }
		}
	}
</script>