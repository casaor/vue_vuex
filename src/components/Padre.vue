<template>        

    <div class="d-flex flex-column align-items-center">

        <h2 class="mb-4">Buscador de películas</h2>

        <label class="mb-2">Escribe tu búsqueda</label>

        <input type="text" class="form-control col-md-8 mb-4" v-model="SearchForm">

        <div class="boxRadio">
            <div class="form-check form-check-inline mb-4">
                <input type="radio" class="form-radio-input mr-1" v-model="available" :value=true>
                <span class="mr-4">Disponible</span>
                <input type="radio" class="form-radio-input mr-1" v-model="available" :value=false>
                <span>No disponible</span>
            </div>

        </div>

    </div>

</template>

<script type="text/javascript" src="./../scripts/padre.js"></script>