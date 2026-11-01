<template>
   <!-- ④ 关于我 -->
    <section class="section about">
      <img class="avatar" src="/bg.jpg" alt="口琴" />
      <div class="about-text">
        <h2>关于我</h2>
        <p>37岁转行做音乐的前端程序员。会吹半音阶口琴，会用库乐队编曲，写代码也写旋律。泪点低，所以曲子都偏抒情。</p>
        <router-link to="/about">了解更多 →</router-link>
      </div>
    </section>

</template>

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
}
.about-text h2 {
  text-align: left;
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
</style>