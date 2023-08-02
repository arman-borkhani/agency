<template>
  <the-header></the-header>
  <hero-section></hero-section>
</template>

<script>
import TheHeader from './components/TheHeader';
import HeroSection from './pages/home/HeroSection';

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection
  }
}
</script>

<style>
@import '~normalize.css/normalize.css';
@import './styles/global.css';
</style>
