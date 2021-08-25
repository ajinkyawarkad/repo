<template>
  <div class="conatainer">
    <div class="row">
      <div class="col-md-3">
        <!-- <nav-list :blogs="blogs" @sendData="getData($event)"></nav-list> -->
        <nav-list @sendData="getData($event)"></nav-list>
      </div>

      <!-- <h1>{{$store.state.blogs}}</h1> -->

      <div class="col-md-9">
        <blog-details @sendId="incLike($event)" :toShow="toShow"></blog-details>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import NavList from "./NavList.vue";

import BlogDetails from "./BlogDetails.vue";

import { mapState } from "vuex";

export default {
  name: "CombComp",
  computed: mapState(["blogs"]),
  components: {
    NavList,
    BlogDetails,
  },

  data() {
    return {
      blogs: [],

      toShow: {},
    };
  },

  methods: {
    getData(blog) {
      console.log("id from appVue", blog.id);
      this.toShow = blog;
    },
    incLike(id) {
      console.log("Got id", id);
      this.$store.commit("addLike", id);
    },
  },
};
</script>


