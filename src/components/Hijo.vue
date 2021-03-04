<template>

        <div v-if="movies.length > 0" class="card-columns">
            <nieto v-for="movie of movies" :movie="movie" v-bind:key="movie"></nieto>  
        </div> 

        <div class="alert alert-danger" v-else>No hay películas disponibles</div>


</template>

<script type="text/javascript" src="./../scripts/hijo.js"></script>
