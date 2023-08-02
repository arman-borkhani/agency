<template>
  <the-header></the-header>
  <hero-section></hero-section>
  <about-section></about-section>
</template>

<script>
import TheHeader from './components/TheHeader';
import HeroSection from './pages/home/HeroSection';
import AboutSection from './pages/home/AboutSection';

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    AboutSection
  }
}
</script>

<style>
@import '~normalize.css/normalize.css';
@import './styles/global.css';
</style>
