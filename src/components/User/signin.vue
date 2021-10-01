<template>
    <div class="container">
       <div class="content sign">
          
          <form @submit.prevent="onSubmit">
            <h1>Sign in</h1>
           
              <div class="input_field">
                  <label>Email</label>
                  <input type="email" v-model="formdata.email"/>
              </div>

              <div class="input_field">
                  <label>Password</label>
                  <input type="password" v-model="formdata.password" />
              </div>
              
              <button>
                  Sign in
              </button>

              <div class="change_type">
                I want to sign up.
              </div>

          </form>

        </div>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                type:true,// true: signin || false: signup
                formdata:{
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit () {
                console.log(this.formdata)
            }
        }
    }
</script>
