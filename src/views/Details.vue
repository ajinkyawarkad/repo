<template>
  <div class="details">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{$route.params.tittle}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{$route.params.author}}</h6>
        <p class="card-text">
          {{$route.params.body}}
        </p>
        <!-- <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  components: {},
  mounted(){
      console.log(this.$route.params.tittle)
     
  }
};
</script>
