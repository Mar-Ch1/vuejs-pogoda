<template>
    <div id="app">
        <Navbar/>
        <router-view></router-view>
    </div>
</template>
<script>
import Navbar from './views/Navbar.vue'
import Search from './views/Search.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Modal from './views/Modal.vue'

    
export default {
    name: 'app',
    components: { 
        Modal,
        Navbar,
  }
}
</script>
<style lang="scss" scoped>

</style>
