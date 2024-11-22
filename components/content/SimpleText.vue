<template>
  <div class="pt-16">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8 sm:mt-16">
      <div class="space-y-10">
        <section>
          <div class="px-4 md:px-0 text lg:text-xl text-brown img:rounded-lg mt-6 break-words">
            <slot></slot>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose-img {
  margin: 1rem 0;
}

.block-img img {
  max-width: 100%;
  height: auto;
}

h3 {
  font-size: 1.5em;
  line-height: 1.3333333;
  margin-bottom: .6666667em;
  margin-top: 1.6em;
  font-weight: 600;
}

p {
  margin-bottom: 1.2em;
  margin-top: 1.2em;
}
</style>
