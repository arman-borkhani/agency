<template>
  <section class="services-sec">
    <div class="services-sec__inner">
      <base-container>
        <h2 class="services-sec__title">Our Best Services</h2>
        <div class="row">
          <div class="col--12 col--lg-6">
            <article class="service-card">
              <div class="service-card__icon service-card__icon--green">
                <svg width="48" height="48">
                  <use href="../../assets/icons.svg#rocket"></use>
                </svg>
              </div>
              <h3 class="service-card__title">Seach Engine Optimization</h3>
              <p class="service-card__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sequi vel quo quam ea repellendus aut aperiam iusto omnis.
              </p>
            </article>
          </div>
          <div class="col--12 col--lg-6">
            <article class="service-card">
              <div class="service-card__icon service-card__icon--red">
                <svg width="48" height="48">
                  <use href="../../assets/icons.svg#chart-one"></use>
                </svg>
              </div>
              <h3 class="service-card__title">Content Optimization</h3>
              <p class="service-card__desc">
                Facere eius labore sequi officiis laudantium harum, 
                eligendi ex quod corporis sit aut facilis voluptas quia.
              </p>
            </article>
          </div>
          <div class="col--12 col--lg-6">
            <article class="service-card">
              <div class="service-card__icon service-card__icon--blue">
                <svg width="48" height="48">
                  <use href="../../assets/icons.svg#chart-two"></use>
                </svg>
              </div>
              <h3 class="service-card__title">Social Media Marketing</h3>
              <p class="service-card__desc">
                nemo magni assumenda dolore ea minima repellat dicta  voluptas
                eius labore sequi officiis laudantium harum
              </p>
            </article>
          </div>
          <div class="col--12 col--lg-6">
            <article class="service-card">
              <div class="service-card__icon service-card__icon--orange">
                <svg width="48" height="48">
                  <use href="../../assets/icons.svg#gear"></use>
                </svg>
              </div>
              <h3 class="service-card__title">SEO Strategy</h3>
              <p class="service-card__desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Nisi unde officiis ducimus vitae itaque quam sit
              </p>
            </article>
          </div>
        </div>
      </base-container>
    </div>
  </section>
</template>

<style scoped>
.services-sec {
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: var(--white);
}

.services-sec__inner {
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.services-sec::before,
.services-sec::after {
  content: "";
  display: block;
  height: 3rem;
  width: 100%;
}

.services-sec::before {
  top: 0;
  background: url("../../assets/curve-gray.svg") center bottom/cover no-repeat;
}

.services-sec::after {
  bottom: 0;
  background: url("../../assets/curve-gray.svg") center bottom/cover no-repeat;
  transform: rotate(180deg);
}

.services-sec__title {
  text-align: center;
  font-size: 2rem;
  line-height: 1.5;
  color: var(--blue-900);
  margin-bottom: 3.5rem;
}

.service-card {
  padding: 3rem 2rem;
  border-radius: 1rem;
  background-color: var(--gray);
  text-align: left;
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.service-card__title {
  font-size: 1.125rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--blue-800);
}

.service-card__desc {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--gray-700);
}

.service-card__icon {
  margin-bottom: 1.5rem;
  color: var(--blue-500);
}

@media screen and (min-width: 992px) {
  .services-sec {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .services-sec__inner {
    padding-top: 6rem;
    padding-bottom: 5rem;
  }

  .services-sec::before,
  .services-sec::after {
    height: 5rem;
  }

  .services-sec__title {
    font-size: 2.5rem;
  }

  .service-card__title {
    font-size: 1.5rem;
  }

  .service-card__desc {
    font-size: 1.125rem;
  }
}
</style>