<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
   <nav class="navbar">
      <div class="nav-inner">
        <span class="logo">🎼 风里的口琴</span>
        <div class="nav-links">
          <router-link to="/">首页</router-link>
          <router-link to="/works">作品</router-link>
          <router-link to="/about">关于</router-link>
          <router-link to="/contact">联系</router-link>
          
        </div>
        <router-view/>
      </div>
    </nav>
</template>

<style scoped>
 

/* ① 导航栏 */
.navbar {
  width: 100vw;
  background: #0f0f1e;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-inner {
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  text-align: center;
}
.logo {
  color: #7c5cbf;
  font-weight: bold;
  font-size: 1.1rem;
}
.nav-links {
  width: 100%; 
}
.nav-links a {
  color: #ccc;
  margin-left: 1.5rem;
  text-decoration: none;
  font-size: 0.95rem; 
  display: inline-block;
  width: 12%;
}
.nav-links a:hover {
  color: #7c5cbf;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
