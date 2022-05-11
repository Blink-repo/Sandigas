<template>
  <div class="flex flex-col min-h-screen">
    <div class="landing-bg">
      <navbar class="w-full "/>
      <div class="flex m-8 sm:m-24 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 class="text-4xl sm:text-5xl 2xl:text-8xl font-semibold m-2">Sanitair & Reparatie <span class="text-secondary">Oplossingen</span></h1>
          <p class="m-2 text-md sm:text-lg 2xl:text-xl"> Wij helpen mensen die hun lekkage willen verhelpen, een cv-ketel willen laten installeren of sanitair willen laten aanlegeen ment onze professionele kennis en expertise. Zodat u zich geen zorgen meer moet maken over dat vervelende probleem. Wij proberen iedereen zo snel mogenlijk verder te helpen zodat u niet te lang moet wachten.
          </p>
          <a href="#contactform">
            <button type="button" class="my-6 px-5 py-3 text-base font-medium text-center text-white bg-secondary rounded-lg shadow-xl hover:bg-secondary-hover focus:ring-4 focus:outline-none focus:ring-blue-300">Contacteer ons</button>
          </a>
        </div>
        <div class="hero container max-w-screen-lg mx-auto flex justify-center">
          <img class="object-contain rounded-lg w-3/5 sm:w3/5 md:w-6/12" src="/img/PlumberManThemed.png" alt="">
        </div>
      </div>
    </div>
  <div class="flex justify-center">
    <contactform class=" w-3/4 lg:w-3/5"/>
  </div>
    <info-card/>
    <foot class="w-full"/>
  </div>
</template>

<style>
html{
  scroll-behavior: smooth;
}
.landing-bg{
  background-color: #ececec;
}

.rotate{
  transform: rotate(180deg);
}
.inView{
  opacity: 1;
  -webkit-transform: translateY(0px) rotate(0deg)
}
</style>
<script>
import Companys from "../components/companys";
export default {
  components: {Companys}
}
</script>