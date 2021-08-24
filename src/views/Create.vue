<template>
    <div>
    <h2>Post Blog</h2>
    <hr/>
    <div class="alert alert-success" v-if="succ">Done</div>
    <form @submit.prevent="onCratePost">
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="title"/>
        </div><br>
         <div class="form-group">
            <label>Author</label>
            <input type="number" class="form-control" v-model="amount"/>
            
        </div><br>
          <div class="form-group">
            <label>Article</label>
            <textarea class="form-control" v-model="desc">
            </textarea>
        </div><br>
        
        <div class="mt-3">
        <button type="submit"  class="btn btn-primary">Post</button> <hr/>
         <router-link to="/" class="btn btn-primary">Home</router-link>


        </div><br>

    </form>
</div>
    
</template>