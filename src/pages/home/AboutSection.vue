<template>
  <section class="about-sec">
    <base-container>
    <div class="about-card">
      <div class="row">
        <div class="col--12 col--lg-6">
          <figure class="about-card__figure">
            <img src="../../assets/about-one.png" alt="people talking">
          </figure>
        </div>
        <div class="col--12 col--lg-6">
          <div class="about-card__text">
            <h2 class="about-card__title">Who We Are</h2>
            <p class="about-card__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Officiis laudantium ut possimus aliquid accusamus labore, 
              facere rem eveniet itaque, nulla incidunt aperiam at 
              voluptates ex sapiente, animi placeat culpa. Ipsum neque 
              deleniti, perspiciatis expedita omnis maiores sit optio 
              voluptatibus a?
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-card">
      <div class="row">
        <div class="col--12 col--lg-6">
          <div class="about-card__text">
            <h2 class="about-card__title">What We Do</h2>
            <p class="about-card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Neque impedit odit sit ea facere molestiae itaque! Error 
              et quibusdam consequuntur, veniam harum aperiam saepe. 
              Similique recusandae sunt officiis corporis veniam.
            </p>
          </div>
        </div>
        <div class="col--12 col--lg-6">
          <figure class="about-card__figure">
            <img src="../../assets/about-two.png" alt="people climbing">
          </figure>
        </div>
      </div>
    </div>
    </base-container>
  </section>
</template>

<style scoped>
.about-sec {
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.about-card {
  margin-bottom: 3rem;
}

.about-card__text {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-card__title {
  text-align: left;
  font-size: 2rem;
  color: var(--blue-900);
  margin-bottom: 2rem;
}

.about-card__desc {
  font-size: 1rem;
  line-height: 200%;
  color: var(--gray-700);
}

.about-card__figure {
  margin-bottom: 1.5rem;
}

@media screen and (min-width: 992px) {
  .about-card__figure {
    margin-bottom: 0;
  }

  .about-card__title {
    font-size: 2.5rem;
  }

  .about-card__desc {
    font-size: 1.25rem;
  }
}
</style>