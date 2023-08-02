<template>
  <a class="btn" v-if="link">
    <slot></slot>
  </a>
  <button class="btn" v-else>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 0.75em 1.25em;
  font-size: 1rem;
  font-weight: 500;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.btn--primary {
  background-color: var(--secondary);
  border-color: var(--secondary);
  color: var(--white);
}

.btn--primary:hover {
  background-color: rgba(66, 186, 150, 0.9);
}

.btn--outline-white {
  border-color: var(--white);
  color: var(--white);
  background-color: transparent;
}

.btn--outline-white:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn--small {
  font-size: 0.875rem;
}

.btn--medium {
  font-size: 1.125rem;
}

.btn--large {
  font-size: 1.25rem;
}
</style>