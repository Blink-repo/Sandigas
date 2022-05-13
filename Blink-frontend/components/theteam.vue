<template>
  <!-- component -->
  <div class="">
    <!-- Code block starts -->
    <section>
      <div class="container flex justify-center mx-auto pt-16">
        <div>
          <h1 class="text-4xl text-center text-gray-800 font-semibold pb-6 mx-auto">Ontmoet ons <span class="text-secondary">Team</span></h1>
        </div>
      </div>
      <div class="w-full px-10 pt-10">
        <div class="container mx-auto">
          <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 hover:scale-110 transition-all duration-300 ease-linear">
              <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" class="rounded-full object-cover h-full w-full shadow-lg" />
                  </div>
                </div>
                <div class="px-6 mt-16 mb-8">
                  <h1 class="font-bold text-3xl text-center mb-1">Sam</h1>
                  <p class="text-gray-800 text-sm text-center">De handige harry</p>
                </div>
              </div>
            </div>
            <div role="listitem" class="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 hover:scale-110 transition-all duration-300 ease-linear">
              <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt="Display Picture of Silene Tokyo" role="img" class="rounded-full object-cover h-full w-full shadow-lg" />
                  </div>
                </div>
                <div class="px-6 mt-16 mb-8">
                  <h1 class="font-bold text-3xl text-center mb-1">Charlotte</h1>
                  <p class="text-gray-800 text-sm text-center">De administratieve duizendpoot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "team"
}
</script>

<style scoped>

</style>