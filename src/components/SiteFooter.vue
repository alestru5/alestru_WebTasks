<template>
    <div class="footer">

      <div class="about">
        <div class="head">
          <p>About me: </p>
        </div>
        <div>
          <p>
            Author: Стругов Алексей<br>
            Security developer & student MEPhI & CTF player. <br>
            33 lyceum graduate. <br>
            Dota 2 player. <br>
            good man... <br>
          </p>
        </div>

        <div>
          <p>
            <a href="https://github.com/alestru5?tab=repositories"><img class="icons" src="@/icons/git.png"></a>
            <a href="https://vk.com/alestru"><img class="icons" src="@/icons/vk.png"></a>
            <a href="https://t.me/alestru5"><img class="icons" src="@/icons/tg.png"></a>
          </p>
        </div>

      </div>
      <div class="about">
        <div class="head">
          <p>Technology stack: </p>
        </div>
        <div>
          <p>Html<br>
            Css<br>
            Java Script<br>
            Vue.js<br>
            Node.js<br>
            SQLite3 <br>

          </p>
        </div>
      </div>
      <div class="about">

        <div class="head">
          <p>Information</p>
        </div>

        <div>
          <p>
            Этот сайт был создан в развлекательных целях. <br>
            Поэтому понятия не имею, что мне здесь написать. <br>
            Если вы на этом сайте, значит я дал вам его потыкать. <br>
            А значит я вам доверяю, пожалуйста, не дудости меня. <br>
            Если сайт вам понравился, то тыкнете лайк, пожалуйста. <br>
          </p>
        </div>

        <div class="like">
          <button @click="like+=1">
            Лайк
          </button>
          <span>{{like}}</span>
        </div>

      </div>

    </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      like: 0
    }
  },
  methods: {}
}
</script>


<style scoped>
button {
  width: 60px;
  height: 25px;
  background: #999999;
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 1.25px 2px;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transition: transform 0.15s;
  transform-style: preserve-3d;
}
button:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #41434A;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #b18597, 0 0.625px 0 0 #ffe3e2;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 0.15s, box-shadow 0.15s;
}
button:active {
  background: #999999;
  transform: translate(0em, 0.75em);
}
button:active::before {
  box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
  transform: translate3d(0, 0, -1em);
}
span{
  margin-left: 10px;
}
div.like{
  text-align: center;
  margin-top: 10px;
}
p {
  text-align: center;
}
.icons{
  width: 40px;
  height: 40px;
  align-content: center;
  margin: 10px 0 5px 5px;
}
div.about{
  display: table-cell;
}
div.head{
  margin: 10px;
  font-size: 15px;
}
.footer {
  overflow: hidden;
  padding: 0; /* Поля вокруг текста */
  background: #333; /* Цвет фона */
  height: auto;
  width: 100%; /* Ширина слоя */
  color: #999999;
  display: table;
}

</style>