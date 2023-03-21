<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/tasks">Tasks</router-link>
      </li>
      <li>
        <router-link to="/board">Board</router-link>
      </li>
      <li>
        <router-link to="/chat">Chat</router-link>
      </li>
      <li>
        <router-link to="/creator">Creator</router-link>
      </li>
      <li>
        <router-link to="/login" class="login">Login</router-link>
        </li>
    </ul>
  </nav><br>

</template>

<script>
export default {
  name: 'SiteMenu',
  data() {
    return {
    }
  },
  methods: {}
}
</script>
<style scoped>
nav {
  background-color: #333;
  overflow: auto;
  /*position: fixed;*/
  top: 0;
  left: 0;
  width: 100%;

}

nav li {
  list-style-type: none; /* Убираем маркеры */
}
nav ul {
  margin-left: 0; /* Отступ слева в браузере IE и Opera */
  padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
}
nav a {
  float: left;
  color: #999999;

  text-align: center;
  padding: 15px 40px;
  text-decoration: none;
  font-size: 50px;
  cursor: pointer;
  user-select: none;
  font-family: DejaVu Sans Mono, monospace;
  display: inline-block;
}
/* Кнопки Регистрации и Логина*/
nav a.login{
  padding: 30px 30px 30px 30px;
  font-size: 25px;
  float: right;
}
/*nav li.reg_log{
  float: right;
}*/
/* Подсвечивание кнопок */
a:hover {
  color: #f2f2f2;
}


</style>