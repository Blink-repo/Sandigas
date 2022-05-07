<template>
    <div  class="  bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-10 shadow shadow-slate-500">
            <div class="grid grid-cols-1 lg:grid-cols-2"> 
              <div class="mb-6 ">

                  <div class= "grid grid-cols-1 lg:grid-cols-2 ">
                      <div class="relative  lg:m-2 mt-2 mb-2">
                          <input type="text" id="inputvoorname" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-inherit border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
                          <label for="inputvoorname" class="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 peer-focus:bg-blue-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Naam</label>
                      </div>
                      <div class="relative lg:m-2 mt-2 mb-2">
                          <input type="text" id="inputname" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-inherit border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
                          <label for="inputname" class="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 peer-focus:bg-blue-200 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">achternaam</label>
                      </div>
                  </div>
                      <div class="relative lg:m-2 mt-2 mb-2">
                          <input type="text" id="inputemail" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-inherit border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
                          <label for="inputemail" class="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 peer-focus:bg-blue-200 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                      </div>
                        <div class="relative lg:m-2 mt-2 mb-2">
                          <input type="text" id="inputmessage" class="block px-2.5 pb-2.5  pt-4 w-full bg-inherit text-sm rounded-lg peer" placeholder=" " />
                          <textarea rows="4" for="inputmessage" class=" w-full border-2 border-secondary-hover rounded-lg mt-5 messageArea absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ">Bericht</textarea>
                      </div>
              <button type="submit" class="mt-10 w-full bg-blue-500 hover:bg-blue-600 rounded-lg pt-2 pb-2">Verzend</button>
              </div>
              

                <div>
                  <card title="Email" nameChild="sandigas@hotmail.be"/>  
                  <card title="GSM" nameChild="0456786576"/>
                </div>
        </div>


    </div>
</template>


<style scoped>
.messageArea{
  resize:none;
}
</style>

