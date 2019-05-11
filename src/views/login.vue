<template>
    
     <div id="login">
          <h1>Login</h1>
          <input type="text" name="username" v-model="input.username" placeholder="Username" />
          <input type="password" name="password" v-model="input.password" placeholder="Password" />
          <button type="button" v-on:click="login()">Login</button>   
     </div>
    
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }

        }

        
        
    }
</script>
<style scoped>
    
    #login {
        width: 500px;
        height: 300px;
        border: 1px solid #CCCCCC;
        border-radius: 10px;
        background-color: #FFFFFF;
        box-shadow: 35px 35px #010f48;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    input[type=text], input[type=password] {
      width: 100%;
     padding: 12px 20px;
      margin: 8px 0;
     display: inline-block;
      border: 1px solid #ccc;
     box-sizing: border-box;
    }

    
</style>