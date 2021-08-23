<template>
  <div class="card">
    <div class="card-header">{{ toShow.tittle }}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>
          {{ toShow.body }}
        </p>
        <footer class="blockquote-footer">
          <cite title="Source Title"> {{ toShow.author }}</cite>
          <hr />

          <div class="conatainer">
            <div class="row">
              <div class="col-md-4">
                <button class="btn btn-primary" @click="$emit('sendId',toShow.id)">Like</button>
              </div>
              <div class="col-md-4">
                   <cite title="Source Title"> {{ toShow.likes }}</cite>
               
              </div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogDetails",
  props: {
    toShow: Object,
  },
  methods: {
    show() {
      console.log(this.toShow);
    },
  
  },
};
</script>
