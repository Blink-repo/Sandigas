<template>
  <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded transition-all duration-300 ease-in">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
           <img src="/img/logos/logo.png" class="w-24 lg:w-32 xs:m-1 sm:m-2 md:m-3" alt="logo" />

          <div class="flex md:order-2">
        <a href="tel:+32484794493"><button type="button" class="sm:hidden text-white bg-secondary hover:bg-secondary-hover focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Bel ons</button></a>
        <button @click="open = !open" data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary" aria-controls="mobile-menu-4" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
        <ul class="md:flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium transition-all ease-in-out duration-300"
            :class="[open ? '' :'hidden']">
          <li>
            <a href="" class="md:text-lg lg:text-xl block py-2 pr-4 pl-3 text-white bg-secondary hover:bg-secondary-hover md:hover:bg-transparent rounded md:bg-transparent md:text-secondary md:p-0" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#info-card" class="md:text-lg lg:text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0">Diensten</a>
          </li>
          <li>
            <a href="#partners" class="md:text-lg lg:text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0">Partners</a>
          </li>
          <li>
            <a href="#team" class="md:text-lg lg:text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0">Team</a>
          </li>
          <li>
            <a href="#aboutus" class="md:text-lg lg:text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0">Over Ons</a>
          </li>
          <li>
            <a href="#contactform" class="md:text-lg lg:text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  data(){
    return{
      open: false,
    }
  },
}
</script>
