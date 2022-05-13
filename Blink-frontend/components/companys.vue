<template>
  <div class="">
    <img src="/img/layered-waves2.svg" alt="" class="object-cover w-full">
    <section class="flex justify-center items-center bg-primary py-12">
      <div class="max-w-7xl">
        <div class="flex justify-center">
          <h1 class="text-4xl font-semibold">Onze <span class="text-secondary">Partners</span></h1>
        </div>
        <div class="grid grid-cols-3 gap-4 py-2">
          <div class="flex items-center justify-center p-6 col-span-1">
            <img class="h-32 md:h-52 text-gray-500 fill-current rounded-lg object-contain sm:object-cover" src="/img/logos/desco.png" alt="">
          </div>
          <div class="flex items-center justify-center p-6 col-span-1">
            <img class="h-24 md:h-44 text-gray-500 fill-current object-contain sm:object-cover" src="/img/logos/logo_marcke.png" alt="">
          </div>
          <div class="flex items-center justify-center p-6 col-span-1">
            <img class="h-24 md:h-80 text-gray-500 fill-current object-contain" src="/img/logos/logo_oirshot_upscale.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <img src="/img/layered-waves2.svg" alt="" class="rotate-180 object-cover w-full">
  </div>

</template>

<script>
export default {
  name: "companys"
}
</script>

<style scoped>
*{
  line-height: 0;
}

.waves{
  background-size: cover;
}
</style>