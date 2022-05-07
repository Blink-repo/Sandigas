<template>
  <div class="flex flex-col min-h-screen">
    <div class="landing-bg">
      <navbar class="w-full"/>
      <div class="flex m-24 grid grid-cols-1 lg:grid-cols-2 gap-4  ">
        <div>
          <h1 class="text-5xl font-semibold m-2">Best Plumbing & Repair <span class="text-blue-600">Solutions</span></h1>
          <p class="m-2 text-lg" >Trust the Sandigas team to provide you the best plumbing & repair solutions for residential and commercial properties.
          </p>
          <button type="button" class="my-6 px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg shadow-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>
        </div>

        <div class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
          <img class="object-cover rounded-lg md:w-4/5" src="assets/img/landing2.webp" alt="">
        </div>

      </div>
    </div>
    <info-card hey="test"/>
    <foot class="w-full"/>
  </div>
</template>

<style>
.landing-bg{
  background-image: url("assets/img/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
