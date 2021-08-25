<template>
  <div>
    <h2>Post Blog</h2>
    <hr />
   
    <form>
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="tittle" />
      </div>
      <br />
      <div class="form-group">
        <label>Author</label>
        <input type="text" class="form-control" v-model="author" />
      </div>
      <br />
      <div class="form-group">
        <label>Article</label>
        <textarea class="form-control" v-model="body"> </textarea>
      </div>
      <br />

      <div class="mt-3">
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="insertData()"
        >
          Post
        </button>
        <hr />
        <router-link to="/" class="btn btn-primary">Home</router-link>
      </div>
      <br />
    </form>
  </div>
</template>
<script>
export default {
  name: "Create",

  data() {
    return {
      tittle: "",
      body: "",
      author: "",
    };
  },
  methods: {
    insertData() {
      let blogs = this.$store.state.blogs;
      let id = blogs.length + 1;

      let dat = {
        id:id,
        tittle:this.tittle,
        body: this.body,
        author: this.author,
        likes: 0,
        dislikes: 0,
      };

        this.$store.commit("insertBlog", dat);

      console.log(id);
    },
  },
};
</script>
