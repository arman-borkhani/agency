<template>
  <footer class="footer">
    <div class="footer__inner">
      <base-container>
        <ul class="list list--inline footer__nav">
          <li class="nav__item"><a class="nav__link" href="#">Home</a></li>
          <li class="nav__item"><a class="nav__link" href="#">Contact Us</a></li>
          <li class="nav__item"><a class="nav__link" href="#">About Us</a></li>
        </ul>
        <ul class="list list--inline socilas">
          <li class="social__item">
            <a class="socila__link" href="#">
              <svg width="24" height="24">
                <use href="../assets/icons.svg#twitter"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="socila__link" href="#">
              <svg width="24" height="24">
                <use href="../assets/icons.svg#linkedin"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="socila__link" href="#">
              <svg width="24" height="24">
                <use href="../assets/icons.svg#youtube"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="socila__link" href="#">
              <svg width="24" height="24">
                <use href="../assets/icons.svg#pinterest"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="socila__link" href="#">
              <svg width="24" height="24">
                <use href="../assets/icons.svg#github"></use>
              </svg>
            </a>
          </li>
        </ul>
        <p class="copyright">&copy;2023 All rights reserved.</p>
      </base-container>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  margin-top: -10rem;
}

.footer::before {
  content: "";
  display: block;
  height: 5rem;
  background: url('../assets/curve-white.svg') bottom/cover no-repeat;
  width: 100%;
}

.footer__inner {
  padding-bottom: 1.5rem;
  background-color: var(--white);
}

.footer__nav {
  justify-content: center;
  margin-bottom: 3rem;
}

.nav__link {
  color: var(--blue-700);
  font-size: 1rem;
  padding: 0.5rem;
  text-decoration: none !important;
}

.socilas {
  justify-content: center;
  margin-bottom: 2rem;
}

.social__item {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}

.socila__link {
  color: var(--primary);
  padding: 0.75rem;
  border: 1px solid var(--primary);
  border-radius: 50%;
  display: flex;
}

.copyright {
  font-size: 0.875rem;
  text-align: center;
  color: var(--primary);
}

@media screen and (min-width: 768px) {
  .footer::before {
    height: 10rem;
  }

  .nav__link {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }

  .socila__link {
    padding: 1rem;
  }

  .socila__link:hover {
    background-color: var(--primary);
    color: var(--white);
    transition: background-color 0.3s ease;
  }

}
</style>