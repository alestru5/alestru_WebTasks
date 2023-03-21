<template>
  <div class = "home">
    <router-link to="/" class="home">Home</router-link>
  </div>
  <form>
    <div class="register">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>

      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
      <hr>

      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button type="submit" class="registerbtn">Register</button>
    </div>

    <div class="signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>
  </form>
  <div class="SiteFooter">
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>

import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: "LoginPage",
  components:{
    SiteFooter
  }
}
</script>

<style scoped>


/* Add padding to containers */
.register {
  padding: 16px;
  background: #333333;
  border-radius: 10px;
  box-shadow:  0 0 50px 5px #333;
}
form{
  user-select: none;
  width: 35%;
  height: 35%;
  position: absolute;
  top: 10%;
  left: 32.5%;

}
a.home{
  float: left;
  color: #999999;
  text-decoration: none;
  text-align: center;
  font-size: 50px;
  cursor: pointer;
  user-select: none;
  font-family: DejaVu Sans Mono, monospace;
  display: inline-block;
}

div.home{
  position: absolute;
  text-align: center;
  width: 10%;
  color: #A1A1A1;
  left: 46.5%;
  top: 2%;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;

  background: #f1f1f1;
  border-radius: 8px;
}
input[type=text]:focus, input[type=password]:focus {
  background-color: #A1A1A1;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 2px solid #A1A1A1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  border-radius: 8px;
  background: #f1f1f1;
  color: #646262;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 1;
  margin-left: 25%;
}

.registerbtn:hover {
  background-color: #A1A1A1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  position: absolute;
  height: 40px;
  width: 50%;
  left: 25%;
}
h1{
  text-align: center;
  color: #A1A1A1;
  font-family: DejaVu Sans Mono, monospace;
}
p {
  color: #A1A1A1;
  text-align: center;
  padding: 9px;
}
label{
  color: #A1A1A1;
  text-align: center;
}
div.SiteFooter :deep(.footer) {
  position: fixed;
  left: 0;
  bottom: 0;
}
a:hover {
  color: #f2f2f2;
}
</style>