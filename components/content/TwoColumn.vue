<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8 sm:mt-16 two-columns">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Vänster kolumn -->
      <div>
        <slot name="left"/>
      </div>

      <!-- Höger kolumn -->
      <div>
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>
