<template>
  <section class="newsletter-sec">
    <div class="newsletter-sec__inner">
      <base-container>
        <article class="newsletter">
          <h2 class="newsletter-sec__title">Subscribe to Newsletter</h2>
          <p class="newsletter-sec__desc">
            Subscribe to our newsletter to receive latest posts
          </p>
          <form class="newsletter-form">
            <svg class="newsletter-form__icon" wdith="24" height="24">
              <use href="../../assets/icons.svg#mail"></use>
            </svg>
            <input class="newsletter-form__input" placeholder="Enter your email" type="email">
            <base-button class="btn btn--primary newsletter-form__submit">
              Subscribe
            </base-button>
          </form>
        </article>
      </base-container>
    </div>
  </section>
</template>

<style scoped>
.newsletter-sec {
  margin-top: 4rem;
  background-color: var(--primary);
}

.newsletter-sec::before {
  content: "";
  display: block;
  width: 100%;
  height: 5rem;
  width: 100%;
  background: url("../../assets/curve-gray.svg") center bottom/cover no-repeat;
}

.newsletter-sec__inner {
  padding-top: 7rem;
  padding-bottom: 20rem;
  text-align: center;
}

.newsletter-sec__title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--white);
}

.newsletter-sec__desc {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--gray-400);
  margin: 0 auto 2.5rem;
}

.newsletter-form {
  padding: 0.5rem;
  border: 1px solid var(--gray-400);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 30rem;
  margin: 0 auto;
  border-radius: 1.25rem;
  color: var(--gray-400);
}

.newsletter-form__input {
  height: 40px;
  font-size: 1rem;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  background-color: transparent;
  padding-left: 1rem;
  color: var(--gray-400);
}

.newsletter-form__icon {
  flex: 0 0 24px;
  margin-left: 0.5rem;
}

.newsletter-form__submit {
  border-radius: 1rem !important;
  width: 100%;
  margin-top: 0.5rem;
}

@media screen and (min-width: 768px) {
  .newsletter-sec__title {
    font-size: 3rem;
  }

  .newsletter-sec__desc {
    font-size: 1.125rem;
  }

  .newsletter-form__input {
    flex: 1 1 auto;
  }

  .newsletter-form__icon {
    flex: 0 0 24px;
    margin-left: 0.5rem;
  }

  .newsletter-form__submit {
    flex: 0 0 auto;
    width: auto;
    margin-top: 0;
  }
}
</style>