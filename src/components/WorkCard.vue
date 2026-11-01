<template>
  <div class="work-card" :class="{ 'card-hover': hover }" @mouseenter="hover = true" @mouseleave="hover = false">
    <!-- 顶部色带 -->
    <div class="card-bar" :style="{ background: gradient }"></div>

    <div class="card-body">
      <!-- 标题区 -->
      <div class="card-header">
        <span class="card-emoji">{{ emoji }}</span>
        <h3 class="card-title">{{ title }}</h3>
      </div>

      <!-- 描述 -->
      <p class="card-desc">{{ desc }}</p>

      <!-- 技术栈标签 -->
      <div class="card-tech">
        <span v-for="t in techList" :key="t" class="tech-tag">{{ t }}</span>
      </div>

      <!-- 底部操作区 -->
      <div class="card-actions">
        <a
          v-if="previewLink"
          class="btn btn-primary"
          :href="previewLink"
          target="_blank"
          rel="noopener"
          @click.stop
        >
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          在线预览
        </a>
        <a
          v-if="githubLink"
          class="btn btn-secondary"
          :href="githubLink"
          target="_blank"
          rel="noopener"
          @click.stop
        >
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.333-1.723-1.333-1.723-1.089-.73.083-.716.083-.716 1.205.083 1.838 1.215 1.838 1.215 1.07 1.798 2.807 1.279 3.492.978.108-.76.418-1.279.762-1.573-2.665-.298-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.228-3.164-.123-.298-.532-1.498.117-3.122 0 0 1.001-.314 3.28 1.209A11.5 11.5 0 0 1 12 6.844c1.016.005 2.038.134 2.993.396 2.275-1.523 3.274-1.209 3.274-1.209.651 1.624.242 2.824.12 3.122.765.825 1.226 1.877 1.226 3.164 0 4.53-2.805 5.527-5.475 5.817.432.366.809 1.086.809 2.188 0 1.58-.015 2.854-.015 3.243 0 .313.216.679.825.567C20.565 21.917 24 17.497 24 12.292 24 5.78 18.627.5 12 .5z"/>
          </svg>
          源码
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  title: string
  desc: string
  tech: string
  emoji?: string
  gradient?: string
  previewLink?: string
  githubLink?: string
}>()

const hover = ref(false)

const techList = computed(() => props.tech.split('·').map(t => t.trim()).filter(Boolean))
</script>

<style scoped>
.work-card {
  position: relative;
  background: #161b2e;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  max-width: 340px;
}

.card-hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(100, 140, 255, 0.15);
}

.card-bar {
  height: 4px;
  width: 100%;
}

.card-body {
  padding: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.card-emoji {
  font-size: 28px;
  line-height: 1;
}

.card-title {
  font-size: 17px;
  font-weight: 600;
  color: #e8e8e8;
  margin: 0;
}

.card-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #a0a8c0;
  margin: 0 0 16px;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.tech-tag {
  font-size: 11px;
  padding: 3px 8px;
  background: rgba(100, 140, 255, 0.12);
  color: #8cb4ff;
  border-radius: 4px;
  font-weight: 500;
}

.card-actions {
  display: flex;
  gap: 10px;
}

.btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-icon {
  width: 14px;
  height: 14px;
}

.btn-primary {
  background: #4f6bff;
  color: #fff;
}

.btn-primary:hover {
  background: #3d56e0;
}

.btn-secondary {
  background: transparent;
  color: #a0a8c0;
  border: 1px solid #2a3050;
}

.btn-secondary:hover {
  background: #1a2040;
  color: #e0e0e0;
  border-color: #4f6bff;
}
</style>