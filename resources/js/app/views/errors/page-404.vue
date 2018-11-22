<template>
<div class="text-center">
    <h2>404 - Página no encontrada</h2>
    <p>La página que está buscando podría haber sido eliminada, su nombre ha sido cambiado o no está disponible.</p>
    <a href="/">ir a la pagina principal</a>

</div>
  
</template>

<script>
    
    export default {
        name:"ComponentErrorPage404",
        mounted() {
            console.log("Component Error Page 404  mounted")
        },
        methods : {
           
           
        },
        computed: {
          
        }
    }
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>

 
