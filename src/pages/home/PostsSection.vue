<template>
  <section class="posts-sec">
    <base-container>
      <h2 class="posts-sec__title">Resources For You</h2>
      <div class="row">
        <div class="col--12 col--lg-4">
          <article class="post-entry">
            <figure class="post-entry__thumbnail">
              <img src="../../assets/post-one.png" alt="People talking">
            </figure>
            <header class="post-entry__header">
              <time class="post-entry__date" datetime="">May 13, 2023</time>
              <span class="seprator"></span>
              <a href="#" class="post-entry__category">Global</a>
            </header>
            <h3 class="post-entry__title">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h3>
            <p class="post-entry__excerpt">
              Sapien ultrices egestas at faucibus eu diam velit diam id amet
               nibh quam rutrum diam fermentum diam natoque scelerisque 
               viverra molestie fames...
            </p>
            <a class="post-entry__link" href="#"></a>
          </article>
        </div>
        <div class="col--12 col--lg-4">
          <article class="post-entry">
            <figure class="post-entry__thumbnail">
              <img src="../../assets/post-two.png" alt="People communicating">
            </figure>
            <header class="post-entry__header">
              <time class="post-entry__date" datetime="">June 20, 2023</time>
              <span class="seprator"></span>
              <a href="#" class="post-entry__category">News</a>
            </header>
            <h3 class="post-entry__title">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p class="post-entry__excerpt">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dolorem commodi adipisci, esse aspernatur a consequatur 
              optio laudantium ducimus consectetur voluptatem!
            </p>
            <a class="post-entry__link" href="#"></a>
          </article>
        </div>
        <div class="col--12 col--lg-4">
          <article class="post-entry">
            <figure class="post-entry__thumbnail">
              <img src="../../assets/post-three.png" alt="People working">
            </figure>
            <header class="post-entry__header">
              <time class="post-entry__date" datetime="">July 05, 2023</time>
              <span class="seprator"></span>
              <a href="#" class="post-entry__category">Branding</a>
            </header>
            <h3 class="post-entry__title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <p class="post-entry__excerpt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate dicta itaque cum vero ad mollitia ipsum minus 
              laborum dicta itaque ...
            </p>
            <a class="post-entry__link" href="#"></a>
          </article>
        </div>
      </div>
    </base-container>
  </section>
</template>

<style scoped>
.posts-sec {
  padding-top: 4rem;
  padding-bottom: 3rem;
}

.posts-sec__title {
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 3.5rem;
  text-align: center;
  color: var(--blue-900);
}

.post-entry {
  background-color: var(--white);
  border-radius: 2rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.post-entry__header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.post-entry__date {
  font-size: 0.75rem;
  color: var(--gray-600);
}

.seprator {
  display: inline-block;
  width: 1px;
  height: 18px;
  background-color: var(--gray-500);
  margin-right: 10px;
  margin-left: 10px;
}

.post-entry__category {
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--gray-400);
  padding: 0.5em 0.75em;
  border-radius: 18px;
  color: var(--blue-900);
  text-decoration: none;
}

.post-entry__title {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: var(--blue-900);
}

.post-entry__excerpt {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--gray-700);
}

.post-entry__link {
  position: absolute;
  inset: 0;
}

@media screen and (min-width: 992px) {
  .posts-sec__title {
    font-size: 2.5rem;
  }

  .post-entry__title {
    font-size: 1.5rem;
  }
}

</style>