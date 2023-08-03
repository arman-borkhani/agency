<template>
  <the-header></the-header>
  <hero-section></hero-section>
  <about-section></about-section>
  <values-section></values-section>
</template>

<script>
import TheHeader from './components/TheHeader';
import HeroSection from './pages/home/HeroSection';
import AboutSection from './pages/home/AboutSection';
import ValuesSection from './pages/home/ValuesSection';

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    AboutSection,
    ValuesSection
  }
}
</script>

<style>
@import '~normalize.css/normalize.css';
@import './styles/global.css';
</style>
