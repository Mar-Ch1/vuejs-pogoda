<template>
    <div class="login container">
        <form class="card-panel">
            <h2 class="center deep-purple-text">Zaloguj</h2>
            <div class="field">
                <label for="email">Podaj email:</label>
                <input type="text" v-model='email' placeholder="email">            
            </div>
            <div class="field">
                <label for="password">Podaj hasło:</label>
                <input type="password" v-model='password' placeholder="Hasło">
            </div>  
            <div class="field center">
                <button class="btn deep-purple" v-on:click="signIn">Zaloguj</button>
            </div>              
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default{
    name: 'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        signIn: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (User) =>{ 
                    this.$router.replace('search')
            },
            (err) =>{
                alert('Ups. '+err.message)
            });
        }
    },
}
</script>

<style>
    
</style>