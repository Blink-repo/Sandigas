<template>
  <div class="flex flex-cols justify-center">
    <div class="bg-primary rounded-lg p-10 shadow shadow-lg m-4 my-20 w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
      <div class="flex justify-center ">
        <div class="w-full">
          <h1 class="m-2 mb-5 text-4xl font-bold">Contacteer <span class="font-bold text-secondary">Ons</span></h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 m-2 mb-10">
            <div class="bg-white shadow-lg rounded-lg p-2 px-4 ">
              <div class="flex flex-cols m-2 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <p>
                  &nbsp +32484794493</p>
              </div>
            </div>
            <div class="bg-white shadow-lg rounded-lg p-2 px-4 text-center">
              <p class="flex flex-cols m-2 justify-center">
                    <span class="align-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">
                        <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
                      </svg>
                    </span>
                &nbsp sandigas@gmail.com</p>
            </div>
          </div>
          <form action="https://formsubmit.co/ibrahimalouissa@gmail.com" method="post">
            <div class= "grid grid-cols-1 xl:grid-cols-2 ">
              <div class="relative  lg:m-2 mt-2 mb-2">
                <input required type="text" name="name" id="inputvoorname" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-primary border-secondary-hover peer-focus:border-secondary text-sm rounded-lg peer" placeholder=" " />
                <label for="inputvoorname" class="absolute text-sm text-black duration-300 transform -translate-y-4 bg-primary scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Naam</label>
              </div>
              <div class="relative lg:m-2 mt-2 mb-2">
                <input type="text" id="inputname" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-inherit border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
                <label for="inputname" class="bg-primary absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">achternaam</label>
              </div>
            </div>
            <div class="relative lg:m-2 mt-2 mb-2">
              <input required type="text" name="email" id="inputemail" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-inherit border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
              <label for="inputemail" class="bg-primary absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
            </div>
            <div class="relative lg:m-2 mt-2 mb-2">
              <textarea required type="text" name="message" rows="4" id="inputemail" class="block px-2.5 pb-2.5  pt-4 w-full border-2 bg-inherit border-secondary-hover text-sm rounded-lg peer" placeholder=" " />
              <label for="inputemail" class="bg-primary absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:rounded-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Bericht</label>
            </div>
            <input type="hidden" name="_next" value="https://sandigas.netlify.app/">
            <button type="submit" class="mt-10 w-full bg-secondary hover:bg-secondary-hover rounded-lg pt-2 pb-2">Verzend</button>
          </form>
        </div>
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
