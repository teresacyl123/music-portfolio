<template>
  <div class="home">
   <!-- ④ 关于我 -->
    <section class="section about">
      <img class="avatar" src="/bg.jpg" alt="口琴" />
      <div class="about-text">
        <h1>关于我</h1>
        <h2>亦柠·前端开发 / 音乐人</h2>
        <p>37岁转行做音乐的前端程序员。会吹半音阶口琴，会用库乐队编曲，写代码也写旋律。泪点低，所以曲子都偏抒情。</p>
      </div>
    </section>
        
</div>
</template>
<script setup lang="ts">
import WorkCard from '../components/WorkCard.vue'
</script>
<style scoped>
/* ④ 关于 */
.about {
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  background: #12122a;
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0; 
  border: 3px solid #0d1117;
}
.about-text h2 { 
  margin-bottom: 1rem;
}
.about-text p {
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.about-text a {
  color: #7c5cbf;
  text-decoration: none;
}
.home {
  min-height: 100vh;
  background: #0d1117;
}
h1,h2{color:white;text-align: center;}
/* Footer */
.footer {
  text-align: center;
  padding: 32px;
  border-top: 1px solid #1a2040;
  color: #4a5080;
  font-size: 13px;
}

@media (max-width: 100vw) {
  .hero-title { font-size: 28px; }
  .card-grid { grid-template-columns: 1fr; }
}
</style>