<template>
  <div>
    <div class="w-full h-auto relative">
      <div class="top-0 left-0 w-full h-full overflow-hidden hero-mask">
        <div class="aspect-w-16 aspect-h-9 md:aspect-h-6">
          <NuxtImg
              :alt="altText"
              :src="imageSrc"
              class="object-cover group-hover:-translate-y-1 group-hover:scale-105 transition ease-in-out duration-1000"
              loading="lazy"
          />
        </div>
      </div>
      <div class="absolute top-0 left-0 text-center w-full h-full flex items-center justify-center">
        <div class="md:-mt-16 flex flex-col w-full px-4 sm:px-0 sm:w-3/4">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Click Here",
    },
    imageSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.hero-mask {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
}

.aspect-w-16 {
  --tw-aspect-w: 16;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
  position: relative;
}

.aspect-h-9 {
  --tw-aspect-h: 9;
}

@media (min-width: 768px) {
  .md\:aspect-h-6 {
    --tw-aspect-h: 6;
  }
}

.aspect-w-16 > * {
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
</style>
