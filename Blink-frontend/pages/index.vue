<template>
  <div class="flex flex-col min-h-screen">
    <div class="background-svg">
      <navbar/>
      <div class="m-24 grid grid-cols-2 gap-4">
        <div>
          <h1 class="text-5xl font-semibold">Best Plumbing & Repair <Span class="text-blue-600">Solutions</Span></h1>
        </div>
        <div>
          <img class="rounded-lg" src="assets/img/landing2.webp" alt="">
        </div>
      </div>
    </div>
    <foot class="fixed bottom-0 w-full"/>
  </div>
</template>

<style>
 .background-svg {
   position: absolute;
   content: '';
   background-size: cover;
   background-repeat: no-repeat;
   /*background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='3840' height='2160' preserveAspectRatio='none' viewBox='0 0 3840 2160'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1257%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c482 C 384%2c615.4 1152%2c1139.8 1920%2c1149 C 2688%2c1158.2 3456%2c652.2 3840%2c528L3840 2160L0 2160z' fill='rgba(209%2c 216%2c 225%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1257'%3e%3crect width='3840' height='2160' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");*/
   background-image: url("assets/img/test.svg");
 }
</style>