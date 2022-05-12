<template>
  <div class="flex flex-col min-h-screen">
    <home />
    <info-card id="info-card"/>
    <companys id="partners"/>
    <theteam id="team" />
    <aboutus id="aboutus" />
    <contactform id="contactform" />
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
