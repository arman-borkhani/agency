<template>
  <section class="callout-sec">
    <base-container>
      <article class="callout">
        <div class="callout__Content">
          <h2 class="callout__title">
            Do You Have Any Question?
          </h2>
          <p class="callout__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ratione, temporibus.
          </p>
          <base-button link href="#" class="btn--primary btn--large">
            CONTACT US
          </base-button>
        </div>
        <div class="callout__circle circle-one"></div>
        <div class="callout__circle circle-two"></div>
      </article>
    </base-container>
  </section>
</template>

<style scoped>
.callout-sec {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.callout {
  background-color: var(--primary);
  text-align: center;
  padding: 6rem 1rem;
  border-radius: 2rem;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.callout__title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;
}

.callout__desc {
  max-width: 530px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--gray-400);
  margin: 0 auto 2.5rem;
}

.callout__circle {
  border-radius: 50%;
  position: absolute;
}

.callout__Content {
  position: relative;
  z-index: 2;
}

@media screen and (min-width: 992px) {
  .callout__title {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .callout__desc {
    max-width: 530px;
    font-size: 1.125rem;
    line-height: 1.5;
    color: var(--gray-400);
    margin: 0 auto 2.5rem;
  }

  .circle-one {
    width: 20rem;
    height: 20rem;
    top: -25%;
    right: 10%;
    background-color: var(--blue-700);
    opacity: 0.3;
  }

  .circle-two {
    width: 15rem;
    height: 15rem;
    bottom: -2%;
    left: -5%;
    background-color: var(--blue-700);
    opacity: 0.5;
  }
}
</style>