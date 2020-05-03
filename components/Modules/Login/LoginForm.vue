<template>
	<div id="login-form-component">
        <form
            class="container"
            @submit.prevent=""
        >
            <div>
                <InputField
                    class="m-2"
                    label="Email Address"
                    id="emailAddress"
                    type="email"
                    :errors="[]"
                    v-model="loginForm.emailAddress"
                />
                <InputField
                    class="m-2"
                    label="Password"
                    id="password"
                    type="password"
                    :errors="[]"
                    v-model="loginForm.password"
                />
            </div>
            <div class="flex justify-between">
                <button type="submit"
                    class="ml-auto text-sm aos-text-gray font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-none"
                    :disabled="submitting"
                    @click="onSubmit()"
                >
                    <b-spinner 
                        v-if="submitting"
                        small
                        variant="primary">
                    </b-spinner>
                    <span v-else>
                        Sign in
                    </span>
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
				loginForm: {
					emailAddress: '',
                    password: '',
				}
			}
		},
		mounted(){

		},
		methods: {
            onSubmit()
            {
                
            }
		}
	}
</script>