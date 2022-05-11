<template>
    
    <div class="bg-primary rounded-lg p-10 shadow shadow-slate-500 m-3 xs:mx-3 sm:mx-10 lg:m-56 xl:m-60">
            <div class="flex justify-center "> 
              <div class="w-1/2 ">
                      <h1 class="m-2 mb-5 text-2xl lg:text-4xl font-bold">Contacteer <span class="font-bold text-secondary">ons</span></h1>
                      <div class="grid grid-cols-1 lg:grid-cols-1 gap-2 m-2 mb-10">
                         <p1>Tel: +32484794493</p1>
                         <p1>sandigas@gmail.com</p1>    
                     </div>
                  <div class= "grid grid-cols-1 xl:grid-cols-2 ">
                      <div class="relative  lg:m-2 mt-2 mb-2">
                          <input type="text" id="inputvoorname" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-primary border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
                          <label for="inputvoorname" class="absolute text-sm text-black duration-300 transform -translate-y-4 bg-primary scale-75 peer-focus:bg-blue-100  top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Naam</label>
                      </div>
                      <div class="relative lg:m-2 mt-2 mb-2">
                          <input type="text" id="inputname" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-inherit border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
                          <label for="inputname" class="bg-primary absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 peer-focus:bg-blue-200 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">achternaam</label>
                      </div>
                  </div>
                      <div class="relative lg:m-2 mt-2 mb-2">
                          <input type="text" id="inputemail" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-inherit border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
                          <label for="inputemail" class="bg-primary absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 peer-focus:bg-blue-200 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                      </div>
                        <div class="relative lg:m-2 mt-2 mb-2 pt-5">
                          <input type="text" id="inputmessage" class="block px-2.5 pb-2.5  pt-4 w-full bg-inherit text-sm rounded-lg peer" placeholder=" " />
                          <textarea rows="4" for="inputmessage" placeholder="Bericht" class=" placeholder-black p-[5px] bg-primary w-full border-2 border-secondary-hover rounded-lg mt-5 messageArea absolute text-sm text-black duration-300 transform  origin-[0]  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 "></textarea>
                      </div>
              <button type="submit" class="mt-10 w-full bg-blue-500 hover:bg-blue-600 rounded-lg pt-2 pb-2">Verzend</button>
              </div>
              <div>
           
                 </div>
        
            </div>

    </div>


</template>


<style scoped>
.messageArea{
  resize:none;
}
</style>