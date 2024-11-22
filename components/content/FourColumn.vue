<template>
  <section class="four-column-component">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8 sm:mt-16">
      <div>
        <h2 class="text-lg lg:text-2xl font-medium mb-6 px-0 inline-block hover:underline">
          <slot name="title">Default Title</slot>
        </h2>
        <div class="grid gap-8 px-4 md:px-0 md:grid grid-cols-1 md:grid-cols-4 md:gap-6">
          <!-- Column 1 -->
          <div class="group flex flex-col items-start justify-between p-4 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <slot name="col1">
              <h3 class="text-lg font-medium">Default Column 1</h3>
              <p class="text-sm flex-grow">This is placeholder content for column 1.</p>
              <a href="#" class="btn btn-primary mt-4">Default Button</a>
            </slot>
          </div>
          <!-- Column 2 -->
          <div class="group flex flex-col items-start justify-between p-4 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <slot name="col2">
              <h3 class="text-lg font-medium">Default Column 2</h3>
              <p class="text-sm flex-grow">This is placeholder content for column 2.</p>
              <a href="#" class="btn btn-primary mt-4">Default Button</a>
            </slot>
          </div>
          <!-- Column 3 -->
          <div class="group flex flex-col items-start justify-between p-4 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <slot name="col3">
              <h3 class="text-lg font-medium">Default Column 3</h3>
              <p class="text-sm flex-grow">This is placeholder content for column 3.</p>
              <a href="#" class="btn btn-primary mt-4">Default Button</a>
            </slot>
          </div>
          <!-- Column 4 -->
          <div class="group flex flex-col items-start justify-between p-4 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <slot name="col4">
              <h3 class="text-lg font-medium">Default Column 4</h3>
              <p class="text-sm flex-grow">This is placeholder content for column 4.</p>
              <a href="#" class="btn btn-primary mt-4">Default Button</a>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.four-column-component img {
  transition: transform 0.3s ease-in-out;
}

.four-column-component img:hover {
  transform: scale(1.05);
}

.group:hover {
  background-color: #f9fafb; /* Light gray hover effect */
}

.group:hover .btn {
  background-color: #4f46e5; /* Primary button hover effect */
  color: #ffffff;
}
</style>
