<template>
  <div class="flex flex-col min-h-screen">
    <div class="landing-bg">
      <navbar class="w-full "/>
      <div class="flex m-24 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 class="text-5xl font-semibold m-2">Best Plumbing & Repair <span class="text-blue-600">Solutions</span></h1>
          <p class="m-2 text-lg" >Trust the Sandigas team to provide you the best plumbing & repair solutions for residential and commercial properties.
          </p>
          <button type="button" class="my-6 px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg shadow-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>
        </div>
        <div class="hero container max-w-screen-lg mx-auto flex justify-center">
          <img class="object-cover rounded-lg lg:w-6/12" src="assets/img/PlumberMan.png" alt="">
        </div>
      </div>
    </div>
    <img src="assets/img/landingsplit.svg" alt="" class="">

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
</style>
