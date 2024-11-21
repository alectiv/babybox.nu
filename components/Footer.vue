<template>
  <footer>
    <div class="container mx-auto py-6 text-center">
      <p>&copy; {{ new Date().getFullYear() }} Babybox.nu. Alla rättigheter förbehållna.</p>
      <nuxt-link to="/integritetspolicy">Integritetspolicy</nuxt-link>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: #e9ecef;
  font-size: 0.9rem;
}
</style>
