<template>
  <the-header></the-header>
  <hero-section></hero-section>
  <about-section></about-section>
  <values-section></values-section>
  <services-section></services-section>
  <testimonials-section></testimonials-section>
  <callout-section></callout-section>
  <posts-section></posts-section>
  <newsletter-section></newsletter-section>
</template>

<script>
import TheHeader from './components/TheHeader';
import HeroSection from './pages/home/HeroSection';
import AboutSection from './pages/home/AboutSection';
import ValuesSection from './pages/home/ValuesSection';
import ServicesSection from './pages/home/ServicesSection';
import TestimonialsSection from './pages/home/TestimonialsSection';
import CalloutSection from './pages/home/CalloutSection';
import PostsSection from './pages/home/PostsSection';
import NewsletterSection from './pages/home/NewsletterSection.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    AboutSection,
    ValuesSection,
    ServicesSection,
    TestimonialsSection,
    CalloutSection,
    PostsSection,
    NewsletterSection
  }
}
</script>

<style>
@import '~normalize.css/normalize.css';
@import './styles/global.css';
</style>
