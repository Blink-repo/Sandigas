<template>
  <div class="flex flex-col min-h-screen">
    <div class="landing-bg">
      <navbar class="w-full "/>
      <div class="flex m-8 sm:m-24 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 class="text-4xl sm:text-5xl 2xl:text-8xl font-semibold m-2">Best Plumbing & Repair <span class="text-blue-600">Solutions</span></h1>
          <p class="m-2 text-md sm:text-lg 2xl:text-xl" >Trust the Sandigas team to provide you the best plumbing & repair solutions for residential and commercial properties.
          </p>
          <a href="#contactform">
            <button type="button" class="my-6 px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg shadow-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>
          </a>
        </div>
        <div class="hero container max-w-screen-lg mx-auto flex justify-center">
          <img class="object-cover rounded-lg w-3/5 sm:w3/5 md:w-6/12" src="/img/PlumberMan.png" alt="">
        </div>
      </div>
    </div>
    <img src="/img/landingsplit.svg" alt="" class="">
    <info-card id="info-card"/>
    <aboutus id="aboutus" />
    <foot class="w-full"/>
  </div>
</template>

<style>
html{
  scroll-behavior: smooth;
}
.landing-bg{
  background-color: #bbe5fd;
}

.rotate{
  transform: rotate(180deg);
}
.inView{
  opacity: 1;
  -webkit-transform: translateY(0px) rotate(0deg)
}
</style>
