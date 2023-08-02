<template>
  <header class="navbar">
    <base-container>
      <div class="navbar__inner">
        <a class="navbar__brand" href="/">Agency</a>
        <div class="navbar__collapse" :class="{ collapsed: navbarCollapsed }">
          <a class="navbar__toggle navbar__toggle--close" v-on:click="hideNavbar">
            <svg width="24" height="24"><use href="../assets/icons.svg#cross"></use></svg>
          </a>
          <ul class="navbar__nav">
            <li class="nav__item active"><a class="nav__link" href="#">Home</a></li>
            <li class="nav__item"><a class="nav__link" href="#">Contact Us</a></li>
            <li class="nav__item"><a class="nav__link" href="#">About Us</a></li>
          </ul>
        </div>
        <base-button link href="#" class="btn--primary d-none d-md-inline-block">HIRE US</base-button>
        <a class="navbar__toggle" v-on:click="showNavbar">
          <svg width="24" height="24"><use href="../assets/icons.svg#menu"></use></svg>
        </a>
      </div>
    </base-container>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navbarCollapsed: true,
    }
  },
  methods: {
    showNavbar() {
      this.navbarCollapsed = false;
    },
    hideNavbar() {
      this.navbarCollapsed = true;
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 4rem;
  color: var(--white);
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--primary);
}
.navbar__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav__item {
  padding: 0.5rem 1rem;
}
.navbar__brand,
.nav__link {
  text-decoration: none;
  color: inherit;
}

.nav__link {
  font-size: 2rem;
}

.navbar__brand {
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
}

.navbar__toggle {
  display: flex;
  cursor: pointer;
}

.navbar__toggle--close {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.navbar__collapse {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: var(--primary);
  transform: translateX(0);
  transition: transform 0.4s ease-out;
  padding-top: 6rem;
}

.navbar__collapse.collapsed {
  transform: translateX(100%);
}

@media screen and (min-width: 768px) {
  .navbar {
    height: 5rem;
  }

  .navbar__toggle {
    display: none;
  }

  .navbar__collapse {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    background-color: transparent;
    padding-top: 0;
    transform: none !important;
  }

  .navbar__nav {
    flex-direction: row;
  }

  .nav__item.active {
    position: relative;
  }

  .nav__item.active::after {
    content: "";
    display: block;
    height: 2px;
    background-color: var(--white);
    position: absolute;
    bottom: -4px;
    left: 1rem;
    right: 1rem;
  }

  .nav__link {
    font-size: 1.125rem;
  }
}
</style>