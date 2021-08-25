import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  getters: {
    getTotal(state){
      return state.blogs.length

    }

  },
  mutations: {
    addLike(state, id) {
      for (var i in state.blogs) {
        if (state.blogs[i].id == id) {
          state.blogs[i].likes++;
        }
      }

    },
    insertBlog(state, data) {
      state.blogs.push(data)

    }



  },
  actions: {

  },


})