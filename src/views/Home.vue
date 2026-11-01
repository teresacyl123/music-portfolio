<template>
   <!-- ② 首屏大图区 -->
    <header class="hero">
      <div class="hero-mask">
        <h1>风里的口琴</h1>
        <p>每一首都是先有旋律，再有和弦</p>
        <router-link to="/works" class="cta-btn">听作品 →</router-link>
      </div>
    </header>
</template>
<style scoped> 

/* ② 首屏 */
.hero {
  width: 100vw;
  height: 85vh; 
  background: url('/bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  
   
}
.hero-mask {
  background: rgba(0,0,0,0.5);
  
  padding: 2rem; 
  border-radius: 12px;
  text-align: center;
  color: white;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.8rem;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}
.cta-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #7c5cbf;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
}

</style>