<template>
    
     <div id="login">
          <h1>Login</h1>
         <input type="text" name="username" v-model="input.username" placeholder="Username" /> 
         <input type="password" name="password" v-model="input.parola" placeholder="Password" /> 
          <button type="button" v-on:click="login()">Login</button>   
     </div>
    
</template>

<script>
import AddRezervare from '../components/AddRezervare.vue';

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    parola: ""
                }
            }
        },
        methods: {
            
            /*
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

            */
            
            login: function () {
             this.$http.post(
               'http://alexr.tutoriale-pe.net/api/utilizator/verifica',
            
             {
                username: this.input.username, 
                parola: this.input.parola
              }).then(function (response) {
                           
            if (response.status === 200 && (this.input.username==response.body.username)&&
            (this.input.parola==response.body.parola)) {
                    //this.$session.start()
                   // this.$session.set('jwt', response.body.token)
                   // Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
                    this.$emit("authenticated", true);
                    this.$parent.mockAccount.username=response.body.username;
                    this.$parent.mockAccount.parola=response.body.parola;
                    //this.$router.push('/secure')
                    this.$router.replace({ name: "secure",params:{user:this.input.username,pass:this.input.parola}} )
                    
                 }
                 else alert("Credentiale incorecte!");
                }, function (err) {
              console.log('err', err)
              })
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