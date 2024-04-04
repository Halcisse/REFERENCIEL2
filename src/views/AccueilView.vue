<script setup lang="ts">
import VisionView from '@/views/Vision.vue'
</script>

<template>
<main class="mainHome">
    <div class="logo">
        <img src="../assets/IMAGES/image pc.png" alt="Logo d'un ordinateur portable" class="imgLogo">
    </div>
    <div class="title">
        <h1>RÉFÉREN<strong>CIEL</strong> </h1>
        <h2>SEO</h2>
    </div>
    <div class="subtitle">VOUS PROPULSE VERS DE NOUVEAUX SOMMETS DANS LE RÉFÉRENCEMENT</div>
    <div class="plus">
        <div class="plusTxt">EN SAVOIR PLUS</div>
        <img src="../assets/IMAGES/flchplus.png" alt="Flèche de direction vers le bas" class="arrow">
    </div>
</main>

</template>


<style scoped>
.mainHome{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.imgLogo{
    width: 350px;
}
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 22px;
    margin-bottom: 55px;
   
}
h1,h2{
    margin: 0;
    color: #533440;
}
h1{
    font-size: 75px;
}
h2{
    font-size: 45px;
}
/* .logo{
    margin-top: 105px;
} */
strong{
    color: #2F435A;
}
.subtitle{
margin-bottom: 40px;
font-size: 19px;
font-weight: bold;
color: #533440;
letter-spacing: 12px;
width: 50%;
text-align: center;
}
.plus{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    color: #9DB6CC;  
    font-weight: bold;
}
.arrow{
    width:250px ;
}
</style>