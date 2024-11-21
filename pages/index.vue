<template>
  <section class="hero py-12">
    <div class="container mx-auto text-center">
      <h1 class="text-3xl font-bold">Välkommen till Babybox.nu</h1>
      <p class="mt-4">Få allt du behöver för din bebis – gratis boxar och unika erbjudanden.</p>
      <nuxt-link class="btn-primary mt-6" to="/erbjudanden">Utforska erbjudanden</nuxt-link>
    </div>
  </section>
</template>
<style scoped>
.hero {
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}
.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  text-decoration: none;
}
</style>
