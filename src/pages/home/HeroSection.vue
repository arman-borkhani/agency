<template>
  <section class="hero-sec">
    <div class="hero-sec__inner">
      <base-container>
        <div class="row">
          <div class="col--12 col--lg-6">
            <div class="hero-sec__content">
              <h1 class="hero-sec__title">
                Grow your
                Business with our
                SEO solution
              </h1>
              <p class="hero-sec__desc">
                We are a full-service Digital Marketing Agency with all
                the foundational tools you need for inbound success.
                With this module, there's no need to go another day.
              </p>
              <base-button link href="#" class="btn btn--outline-white btn--large">
                Learn More
              </base-button>
            </div>
          </div>
          <div class="col--12 col--lg-6">
            <img class="d-none d-lg-block" src="../../assets/hero.png" alt="people working">
          </div>
        </div>
      </base-container>
    </div>
  </section>
</template>

<style scoped>
.hero-sec {
  padding-top: 4rem;
  color: var(--white);
  position: relative;
  margin-bottom: 1rem;
}

.hero-sec__inner {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: var(--primary);
}

.hero-sec::after {
  content: "";
  display: block;
  height: 8rem;
  background: url('../../assets/curve-blue.svg') bottom/cover no-repeat;
}

.hero-sec__content {
  text-align: center;
}

.hero-sec__title {
  font-size: 2rem;
  line-height: 130%;
}

.hero-sec__desc {
  font-size: 1rem;
  line-height: 170%;
  margin-bottom: 2.5rem;
}

@media screen and (min-width: 992px) {
  .hero-sec {
    padding-top: 5rem;
    margin-bottom: 2rem;
  }

  .hero-sec__inner {
    display: flex;
    align-items: center;
    min-height: calc(100vh - 5rem);
  }

  .hero-sec__content {
    text-align: left;
  }

  .hero-sec__title {
    font-size: 3rem;
    line-height: 130%;
    max-width: 29rem;
  }

  .hero-sec__desc {
    text-align: justify;
    font-size: 1.25rem;
  }

  .hero-sec::after {
    height: 13rem;
  }
}
</style>