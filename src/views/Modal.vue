<template>
    <div id="modal-prognoza">
        <div id="openweathermap-widget-11"></div>
        <button class="close" @click="$emit('closeModal')">Zamknij</button>
    </div>

</template>

<script>  
export default{
    name:'Modal',
    props: {
        forecast_id: {
            type: String
        }
    },    
    mounted: function() {
        console.log(this.forecast_id);
        var script = document.createElement('script');script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);
    
        window.myWidgetParam
            ? window.myWidgetParam
            : window.myWidgetParam = [];
        window.myWidgetParam.push({id: 11,cityid:this.forecast_id,appid: '948b7f592d453b664be5fee32eb18ac4',units: 'metric',containerid: 'openweathermap-widget-11',  });
        var script = document.createElement('script');script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    },
 
}
           
</script>

<style scoped>
    
</style>