<template>
  <section class="testimonial-sec">
    <base-container>
      <h2 class="testimonial-sec__title">Testimonials</h2>
      <div class="testimonial-wrap">
        <svg class="testimonial-icon" width="64" height="64">
          <use href="../../assets/icons.svg#quote"></use>
        </svg>
        <swiper 
          :slides-per-view="1"
          :modules="modules"
          :navigation="{
            nextEl: '.testimonial-sc__button-next',
            prevEl: '.testimonial-sc__button-prev',
          }"
          :space-between="30"
        >
          <swiper-slide>
            <article class="testimonial">
              <p class="testimonial__quote">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odio maxime sapiente officia vitae odit. 
                Odit, ipsa velit! Eius quam error voluptatum, 
                veniam iusto architecto quibusdam, eveniet a libero, 
                voluptas neque.
              </p>
              <footer class="testimonial__footer">
                <div>
                  <h5 class="testimonial__name">Taylor Bailey</h5>
                  <div class="testimonial__position">Head of Marketing</div>
                </div>
              </footer>
            </article>
          </swiper-slide>
          <swiper-slide>
            <article class="testimonial">
              <p class="testimonial__quote">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur nemo possimus esse et quod ipsum cupiditate laboriosam,
                aliquid ut saepe facilis dicta quam excepturi quis dolor 
                temporibus explicabo! Aspernatur.
              </p>
              <footer class="testimonial__footer">
                <div>
                  <h5 class="testimonial__name">Drake Marshman</h5>
                  <div class="testimonial__position">Developer</div>
                </div>
              </footer>
            </article>
          </swiper-slide>
          <swiper-slide>
            <article class="testimonial">
              <p class="testimonial__quote">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Debitis ratione, minus sed ipsam quia temporibus. Non adipisci, 
                dignissimos sed molestiae aut nostrum quae! Obcaecati harum 
                dignissimos numquam nisi! Assumenda, perspiciatis.
              </p>
              <footer class="testimonial__footer">
                <div>
                  <h5 class="testimonial__name">Emmett Kimmons</h5>
                  <div class="testimonial__position">Designer</div>
                </div>
              </footer>
            </article>
          </swiper-slide>
        </swiper>
      </div>
      <footer class="testimonial-sec__footer">
        <div class="carousel-nav testimonial-sec__nav">
          <button class="carousel-nav__button testimonial-sc__button-prev">
            <svg width="24" height="24">
              <use href="../../assets/icons.svg#chevron-left"></use>
            </svg>
          </button>
          <button class="carousel-nav__button testimonial-sc__button-next">
            <svg width="24" height="24">
              <use href="../../assets/icons.svg#chevron-right"></use>
            </svg>
          </button>
        </div>
      </footer>
    </base-container>
  </section>
</template>

<script>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
    }
  }
}
</script>

<style scoped>
.testimonial-sec {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.testimonial-sec__title {
  font-size: 2rem;
  margin-bottom: 3.5rem;
  line-height: 1.5;
  color: var(--blue-900);
}

.testimonial-wrap {
  padding: 2rem 2.5rem 3rem;
  border-radius: 2rem;
  background-color: var(--white);
}

.testimonial-icon {
  color: var(--green-400);
}

.testimonial {
  padding-top: 2rem;
}

.testimonial__quote {
  font-size: 1rem;
  line-height: 200%;
  margin: 0 auto 2rem;
  color: var(--blue-900);
}

.testimonial__name {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--gray-800);
}

.testimonial__position {
  font-size: 0.875rem;
  line-height: normal;
  color: var(--gray-600);
}

.carousel-nav__button {
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none !important;
  background-color: var(--secondary);
  color: var(--white);
  transition: background-color 0.3 ease;
}

.testimonial-sc__button-prev {
  margin-right: 0.5rem;
}

.swiper-button-disabled {
  background-color: var(--green-300);
}

.testimonial-sec__footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
}

@media screen and (min-width: 992px) {
  .testimonial-sec__title {
    font-size: 2.5rem;
  }

  .testimonial__quote {
    font-size: 1.25rem;
  }

  .testimonial__name {
    font-size: 1.25rem;
  }
}
</style>