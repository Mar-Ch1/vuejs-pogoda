
<template>

<div class="wrapper">
    <Modal v-if="modalOpen" :forecast_id=id @closeModal="modalOpen = false" />
    <button  class="button-wyloguj waves-effect waves-light btn-large deep-purple darke-1" v-on:click="logout ">Wyloguj</button>
    <div class="search">
        <label for="Search">Szukaj</label>
        <input 
               id="search" 
               name="search" 
               v-model="searchValue"
               />
        <el-button type="primary" v-on:click="getapi" >Dodaj miasto</el-button>
    </div>
    <el-table
    ref="singleTable"
    :data="response"
    style="width: 650px" >
        
        <el-table-column 
        prop="city"
        label="Miasto"
        width="100">
        </el-table-column>
        
        <el-table-column
        align="center"
        prop="temperature"
        label="Temperatura"
        width="110">
        </el-table-column>
        
        <el-table-column
        align="center"
        prop="humidity"
        label="Wilgotność"
        width="100">
        </el-table-column> 
        
        <el-table-column
        align="center"
        prop="city_id"
        label="ID"
        width="100">
        </el-table-column>    
        
        <el-table-column
        slot="empty"
        prop=""
        width="0">
        </el-table-column>  
        
        <el-table-column
        fixed="right"
        width="150">  
            
            <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index,response)"type="text"size="small">Usuń</el-button>
                <el-button  id="show-modal" @click.native="handleModalOpen(scope.$index, response)"type="text" size="small">Prognoza
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
    import firebase from 'firebase';
    import axios from 'axios';
    import debounce from 'lodash.debounce';
    import Modal from './Modal';
    const API = 'http://api.openweathermap.org/data/2.5/weather?q=';   
    const API_KEY = '948b7f592d453b664be5fee32eb18ac4';   
    export default {
        name: 'Search',
        components:{
            Modal,
        },

        data(){
            return {
                modalOpen:false,
                searchValue: '',
                response:[],
                id: "",
            };
        },
        methods: {

            deleteRow(index, rows) {
            rows.splice(index, 1);
          },
            handleModalOpen(index, response){
                this.modalOpen = true;
                this.id = response[index].city_id.toString();
            },
            getapi:(function() {

                axios
                    .get(`${API}${this.searchValue}&units=metric&APPID=${API_KEY}
`)
                    .then((response) =>{
                    let zmienna = {
                        city: response.data.name,
                        city_id: response.data.id,
                        temperature: response.data.main.temp,
                        humidity: response.data.main.humidity,

                    };
                    this.response.push(zmienna);
                })
                    .catch((error) => {
                    console.log(error);
                });
            }),
            logout:function (){
                firebase.auth().signOut().then(() =>{
                    this.$router.replace('login')
                })
            }
        },
        mounted: function () {
            let that = this;
            setInterval(() => {

                let updated = [];

                for (let id in that.response) {


                    axios
                        .get(`${API}${that.response[id].city}&units=metric&APPID=${API_KEY}`)
                        .then((response) =>{

                        let zmienna = {
                            city: response.data.name,
                            temperature: response.data.main.temp,
                            humidity: response.data.main.humidity,
                            city_id: response.data.id,
                        };


                        updated.push(zmienna);
                    })
                        .catch((error) => {
                        console.log(error);
                    });

                }

                that.response = updated;

            }, 60000);
        }



    };
</script>
<style lang="scss" scoped>

    .button-wyloguj{
        margin-top: 50px;
        margin-bottom: 30px;
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 30px;
        width: 100%;
    }
    .search{
        display: flex;  
        flex-direction: column;
        width: 250px;
        margin-bottom: 30px;

    }
    input{
        height: 30px;
        border-bottom: 1px solid black;
        margin-bottom: 20px;
    }
</style>
