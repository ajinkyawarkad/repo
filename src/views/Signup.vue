<template>
  <div class="signup">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h1>Sign Up</h1>
          <form>
            <div class="form-group">
               <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEsmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
             <br>

              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmssail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
             <br>

              <label for="exampleInputEmail1">Phone</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmails1"
                aria-describedby="emailHelp"
                placeholder="Enter Phone"
              />
             <br>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPasswordd1"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-check">
             
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    signUp(){

    }

  }
  
}
</script>

