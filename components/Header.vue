<template>
  <header>
    <nav class="container mx-auto flex justify-between items-center py-4">
      <div class="logo">
        <nuxt-link to="/">Babybox.nu</nuxt-link>
      </div>
      <ul class="flex space-x-4">
        <li><nuxt-link to="/">Hem</nuxt-link></li>
        <li><nuxt-link to="/erbjudanden">Erbjudanden</nuxt-link></li>
        <li><nuxt-link to="/kontakta-oss">Kontakta oss</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  background-color: #f8f9fa;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
