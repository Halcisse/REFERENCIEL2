<script setup lang="ts">
</script>



<template>
    <main class="mainVision">
        <h1>NOTRE VISION</h1>
        <div class="visionContent">
            <section class="visionTxt">
                Nous croyons fermement en l'importance d'une approche holistique du référencement. 

                C'est pourquoi chaque site que nous concevons est soigneusement optimisé pour les moteurs de recherche dès sa conception. 

                De la structure de l'URL à la rédaction de contenu, en passant par les balises META et les liens internes
            </section>
            <aside class="visionAside">
                <img src="../assets/IMAGES/LAPTOP.png" alt="photo d'un ordinateur portable" class="laptop">
                <p class="legende">- Aucun détail n'est négligé dans notre quête de performance SEO - </p>
            </aside>
        </div>
        <div class="avantageTitle">
                <h2>RÉFÉREN<strong>CIEL</strong> <br>SEO</h2>
            <p>VOUS PERMET DE BÉNÉFICIER DE NOMBREUX AVANTAGES</p>
            
            </div>
        <div class="avantageContent">

                <section class="avantageTxt">
                <h4>Une visibilité accrue</h4>
                <p>Votre site web apparaîtra en tête des résultats de recherche, attirant ainsi un trafic qualifié et augmentant vos chances de conversion.</p>
<br>
                <h4>Une expérience utilisateur optimisée </h4>
                <p>Nous concevons des sites web conviviaux et intuitifs, garantissant une expérience utilisateur exceptionnelle à chaque visite</p>
<br>
                <h4>Une rentabilité renforcée</h4>
                <p> Un site web bien positionné génère un retour sur investissement significatif à long terme, en attirant un flux constant de clients potentiels.</p>
<br>
                <h4>Suivi et Analyse </h4>
                <p>Nous vous fournissons des outils de suivi avancés pour surveiller les performances de votre site web et ajuster notre stratégie en conséquence</p>
<br>            </section>
                <aside>
                <img src="../assets/IMAGES/SEOX5.png" alt="photo d'un logo SEO x3" class="SEO5">
                </aside>
            
        </div>


    </main>
</template>

<style scoped>
.mainVision{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
}
h1{
    width: 60%;
    font-size: 50px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: #533440;
    
    letter-spacing: 7px;
    text-align: left;
}
.visionContent{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70%;
    /* text-align: center; */
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #533440;
    margin-bottom: 25px;
}
.visionTxt{
    width: 45%;
    text-align: center;
    font-size: 24px;
}
.visionAside{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: cover;
}
.laptop{
    width: 270px;
}
.legende{
    text-align: center;
    color: #A47786;
    font-weight: bold;
    letter-spacing: 7px;
    font-size: 28px;
    margin: 10px 0 0 0 ;
    width: 60%;
}
.avantageContent, .avantageTitle{
    background-color:#A47786;
    width: 100%;
}
.avantageTitle{
  
    text-align: center;
    color: #533440;

}
.avantageContent{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
   text-align: center;
}
.avantageTxt{
    font-size: 18px;

}
h4{
    color: #533440;

}
p{
    color: #E4D4C8;
    margin: 0;
}
</style>