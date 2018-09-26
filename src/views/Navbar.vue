<template>
    <div class="navbar">
        <nav class="deep-purple darke-1">
            <div class="container">
                <a href="" class="brand-logo">Pogoda</a>
                <ul class="right">
                    
                    <li><router-link to="/signup">Załóż konto</router-link></li>
                    <li><router-link to="/login">Zaloguj</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'Navbar',
        data(){
            return {
                
            }
        }
    }
    
</script>

<style>

</style>