<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/bind">
      Data Bind
    </router-link> |
    <router-link to="/vhtml">
      v-html
    </router-link> |
    <router-link to="/form">
      FormBind
    </router-link> |
    <router-link to="/attribute">
      AttributeBind
    </router-link> |
    <router-link to="/class">
      Class
    </router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
p {
  width: 500px;
  margin: 0 auto;
  text-align: justify;
  padding: 20px;
  border: 2px solid #000;
  margin-bottom:20px;
}
</style>
