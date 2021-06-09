<template>
  <div class="w-screen h-screen flex bg-white">
    <div class="w-3/4 flex-col content-center ">
      <h1 class="text-left font-thin text-4xl">THE CALORIE COUNTER</h1>
      <section class="w-8/12 py-5 px-6">
        Find out how many calories you need to eat to achieve your goals. From
        cutting to bulking!
      </section>
      <button
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-32 py-2 px-4 border border-gray-400 rounded shadow mx-6"
      >
        Calculate
      </button>
    </div>
    <div class="w-1/4 border-l border-gray-700">
      <h2 class=" font-thin text-2xl text-center py-3 ">Features</h2>
      <ul class="text-center">
        <li class="py-2 hover:bg-gray-200">Basil Metabolic Rate</li>
        <li class="py-2 hover:bg-gray-200">Losing</li>
        <li class="py-2 hover:bg-gray-200">Maintaining</li>
        <li class="py-2 hover:bg-gray-200">Bulking</li>
        <li class="py-2 hover:bg-gray-200">Macro Breakdown</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
};
</script>
