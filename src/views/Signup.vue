<template>
    <div class="signup container">
        <form @submit.prevent="signup"class="card-panel">
            <h2 class="center deep-purple-text">Załóż konto</h2>
            <div class="field">
                <label for="email">Podaj email:</label>
                <input type="text" v-model='email' placeholder="email">            
            </div>
            <div class="field">
                <label for="password">Podaj hasło:</label>
                <input type="password" v-model='password' placeholder="Hasło">
            </div>  
            <div class="field center">
                <button class="btn deep-purple" v-on:click='singUP'>Wyślij</button>
            </div>              
        </form>
    </div>
</template>

<script>
import Navbar from './Navbar'    
import firebase from 'firebase'
export default{
    name: 'Signup',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        singUP: function(){
            firebase.auth().createUserWithEmailAndPassword (this.email, this.password).then
            (function(user){
                alert('Twoje konto zostało założone')
            },
            function(err){
                alert('Ups.' +err.message)
            }
        );
    }
    }
}
</script>

<style>

</style>

