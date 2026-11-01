<template>
   <!-- ③ 作品展示区 -->
    <section class="section works">
      <h2>最新作品</h2>
      <div class="cards">
        <div class="card">
          <div class="icon">🎵</div>
          <h3>原来你也在这里</h3>
          <p>C调半音阶口琴 · 抒情小品</p>
          <audio controls src="/audio/原来你也在这里.mp3"></audio>
        </div>
        <div class="card">
          <div class="icon">🎵</div>
          <h3>永不失联的爱</h3>
          <p>口琴主旋律 · 库乐队编曲</p>
          <audio controls src="/audio/永不失联的爱.mp3"></audio>
        </div>
        
      </div>
    </section>
</template>

<script setup>
const songs = [
  {
    title: '原来你也在这里',
    desc: 'C调半音阶口琴 + 吉他分解，抒情小品',
    src: '/audio/原来你也在这里.mp3'
  },
  {
    title: '永不失联的爱',
    desc: '口琴主旋律，库乐队编曲',
    src: '/audio/永不失联的爱.mp3'
  }
]
</script>
<style scoped>
/* ③ 作品区 */
.section { 
  padding: 4rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}
.section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: #e0e0e0;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
.card {
  background: #1a1a2e;
  padding: 1.5rem;
  border-radius: 10px;
  color: #e0e0e0;
}
.card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.card h3 {
  margin: 0.5rem 0;
}
.card p {
  opacity: 0.7;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
.card audio {
  width: 100%;
}
</style>