<template>
  <div class="conatainer">
    <div class="row">
      <div class="col-md-3">
        <nav-list :blogs="blogs" @sendData="getData($event)"></nav-list>
      </div>

      <div class="col-md-9">
        <blog-details @sendId="incLike($event)" :toShow="toShow"></blog-details>
      </div>
    </div><hr>
    
  </div>
</template>

<script>
import NavList from "./NavList.vue";

import BlogDetails from "./BlogDetails.vue";

export default {
  name: "CombComp",
   components: {
    NavList,
    BlogDetails,},


  data(){
      return{
            blogs: [
        {
          id: 1213,
          tittle: "First Blog",
          body: "ahfkjd asjkdfjhaslkf kjahflaskd kjsdadhfldskajf jdhfldsk kjsdjfdnlasdf jkjfnsdlaf kadjsfnl ",
          author: "Ajinkya Warkad",
          likes: 0,
          dislikes: 0,
        },
        {
          id: 2432,
          tittle: "Second Blog",
          body: "ahfkjd asjkdfjhaslkf kjahflaskd kjsdadhfldskajf jdhfldsk kjsdjfdnlasdf jkjfnsdlaf kadjsfnl adsfasf fadfadf adf adf s dff ",
          author: "Santosh Patil",
          likes: 0,
          dislikes: 0,
        },
        {
          id: 324,
          tittle: "Third Blog",
          body: "ahfkjd asjkdfjhaslkf kjahflaskd kjsdadhfldskajf jdhfldsk kjsdjfdnlasdf jkjfnsdlaf kadjsfnl gfdgfgs dfgsf dsfgs dfsg gsdfgs fdgsgs gdf ",
          author: "Subodh Shendre",
          likes: 0,
          dislikes: 0,
        },
        {
          id: 234,
          tittle: "New Blog",
          body: "ahfkjd asjkdfjhaslkf kjahflaskd kjsdadhfldskajf jdhfldsk kjsdjfdnlasdf  gs fdsg fg sfgsf g fsgdsfgsg dsfgjkjfnsdlaf kadjsfnl ",
          author: "Pratik Mane",
          likes: 0,
          dislikes: 0,
        },
        {
          id: 4353,
          tittle: "Fifth Blog",
          body: "ahfkjd asjkdfjhaslkf  g dfsg sdfgsfg fsd  gfg sg dfgdsfg  kjahflaskd kjsdadhfldskajf jdhfldsk kjsdjfdnlasdf jkjfnsdlaf kadjsfnl ",
          author: "Prashant Gholap",
          likes: 0,
          dislikes: 0,
        },
      ],

      toShow: {},

      }
  },

   methods: {
    getData(blog) {
      console.log("id from appVue", blog.id);
      this.toShow = blog;
    },
    incLike(id) {
      console.log("Got id", id);
      for (var i in this.blogs) {
        if (this.blogs[i].id == id) {
          this.blogs[i].likes++;
        }
      }
    },
  },

  



};
</script>


