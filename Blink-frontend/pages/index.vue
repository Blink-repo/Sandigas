<template>
  <div class="flex flex-col min-h-screen">
    <div>
      <navbar class="w-full "/>
      <div class="flex m-24 grid grid-cols-1 sm:grid-cols-2 gap-4  ">
        <div>
          <h1 class="text-5xl font-semibold">Best Plumbing & Repair <span class="text-blue-600">Solutions</span></h1>

          <div class="m-4 p-24">
            <button type="button" class="text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Contact Us</button>
          </div>

        </div>
        <div class="flex justify-center">
          <div>
            <img class="object-cover rounded-lg" src="assets/img/landing2.webp" alt="">
          </div>
        </div>
      </div>
      <div class="flex justify-center background">
        <contactform class="w-3/4 md:w-1/2 lg:w-3/5"/>
      </div>
    </div>
    <info-card/>
    <foot class="w-full"/>
  </div>
</template>



<style scoped>
.background{
background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='600' preserveAspectRatio='none' viewBox='0 0 1440 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1052%26quot%3b)' fill='none'%3e%3crect width='1440' height='600' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c45 C 288%2c72.2 1152%2c153.8 1440%2c181L1440 600L0 600z' fill='rgba(232%2c 232%2c 232%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c435 C 288%2c458.2 1152%2c527.8 1440%2c551L1440 600L0 600z' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1052'%3e%3crect width='1440' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
background-repeat: no-repeat;
background-size: cover;
}
</style>