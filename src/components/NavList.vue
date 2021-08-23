<template>
  <div>
    <div class="card" style="width: 18rem">
      <div class="card-header">Blogs</div>
      <ul class="list-group list-group-flush">
            <li class="nav-item" v-for="blog in blogs" :key="blog.id">
      <a class="nav-link active" @click="$emit('sendData',blog)">{{
        blog.tittle
      }}</a>
    </li>
       
      </ul>
    </div>

  
  </div>
</template>

<script>
export default {
  name: "NavList",
  props: {
    blogs: Array,
  },

  data() {
    return {};
  },
  methods: {
    // sendData(blg) {
    //   this.$emit("getData", blg);
    //     console.log(blg)
    // },
  },
};
</script>
