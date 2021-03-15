<template>


  <fade>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-info">{{ movie.title }}</h5>
        <!-- <h6 class="card-subtitle mb-2 text-muted">{{ movie.available }}</h6> -->
        <h6 class="card-subtitle mb-2" :class="AddClass()">{{IsAvailable()}}</h6>
        <p class="card-text">{{ movie.description }}</p>
      </div>
    </div>
  </fade>


  
</template>

<script type="text/javascript" src="./../scripts/nieto.js"></script>

<style lang="scss">
.card {
  height: 10rem !important;
}
</style>