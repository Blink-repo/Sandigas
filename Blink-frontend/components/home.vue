<template>
  <div class="landing-bg">
    <navbar class="w-full"/>
    <div class="flex m-8 sm:m-24 xl:mx-48 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold m-2">Sanitair, verwarming &<br><span class="text-secondary">herstellingen</span></h1>
        <p class="m-2 text-md sm:text-lg 2xl:text-xl"> Wij helpen mensen die hun lekkage willen herstellen, een cv-ketel willen laten installeren of sanitair willen laten aanleggen met onze professionele kennis en expertise. Zodat u zich geen zorgen meer moet maken over dat vervelende probleem. Wij proberen iedereen zo snel mogenlijk verder te helpen zodat u niet te lang moet wachten.
        </p>
        <a href="#contactform">
          <button type="button" class="m-2 my-6 px-5 py-3 text-base font-medium text-center text-white bg-secondary rounded-lg shadow-xl hover:bg-secondary-hover focus:ring-4 focus:outline-none focus:ring-secondary">Contacteer ons</button>
        </a>
      </div>
      <div class="hero container max-w-screen-lg mx-auto flex justify-center">
        <img class="object-contain rounded-lg w-full lg:w-4/5 xl:w-3/5" src="/img/landing.svg" alt="">
      </div>
    </div>
  </div>
  <img src="/img/wavesOpacity.svg" alt="" class="">
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>