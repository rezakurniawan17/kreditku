<template>
  <section id="features-app">
    <h4 class="mx-auto mt-20 text-3xl font-bold text-center text-gray-700">Keunggulan Kreditku</h4>
    <div class="container lg:relative px-5 lg:px-0 lg:mt-0 flex lg:flex-row flex-col w-full lg:w-10/12 2xl:w-8/12 xl:w-8/12 lg:p-3 xl:p-4 p-5 mx-auto rounded-lg lg:shadow-primary lg:top-[-60px] xl:top-[-90px] bg-white">
      <div v-for="feature in features" :key="feature.id"  class="p-5 text-center lg:p-4 lg:w-1/3">
        <img class="mx-auto md:w-28 lg:w-16" :src="feature.img" alt="">
        <h5 class="inline-block px-5 py-2 mt-3 text-sm font-bold bg-blue-100 rounded-full text-primary md:text-xl xl:text-2xl">{{ feature.title }}</h5>
        <p class="mt-2 text-captions lg:w-full md:w-8/12 md:mx-auto lg:text-sm xl:text-base">{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from '../assets/img/prime-time.svg'
import img2 from '../assets/img/target.svg'
import img3 from '../assets/img/circular.svg'
export default {
  data() {
    return {
      features: [
        {
          title: 'Proses Cepat',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus',
          img: img1
        },
        {
          title: 'Target Tepat',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus',
          img: img2
        },
        {
          title: 'Fleksibel',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus',
          img: img3
        }
      ]
    }
  }
}
</script>