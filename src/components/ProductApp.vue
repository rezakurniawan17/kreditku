<template>
  <section id="product-app">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col items-center lg:flex-row">
        <div class="relative justify-center hidden w-6/12 pr-6 lg:bottom-[-20px] xl:bottom-0 lg:inline-flex">
          <img src="../assets/img/product.png" alt="">
        </div>
        <div class="w-full p-2 lg:p-5 lg:w-6/12">
          <h5 class="mb-10 text-3xl font-extrabold text-center lg:text-4xl lg:text-left text-heading">Pembiayaan Kreditku</h5>
          <div class="grid grid-cols-1 gap-8 lg:gap-6 xl:gap-8 md:grid-cols-2">
            <div v-for="product in products" :key="product.id" class="h-auto px-4 py-8 mx-auto text-center duration-500 ease-in-out transform hover:border-2 hover:border-primary hover:-translate-y-2 sm:w-9/12 md:w-11/12 lg:w-full lg:px-4 xl:px-6 lg:py-8 rounded-xl shadow-primary">
              <img class="items-center block mx-auto xl:w-24 lg:w-16" :src="product.img" :alt="product.title">
              <h6 class="inline-block px-4 py-1 mt-4 text-sm font-bold bg-blue-100 rounded-full text-primary">{{ product.title }}</h6>
              <p class="mt-2 text-captions">{{ product.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from '../assets/img/truck.svg'
import img2 from '../assets/img/delivery-van.svg'
import img3 from '../assets/img/delivery-truck.svg'
import img4 from '../assets/img/jeep.svg'
export default {
  data() {
    return {
      products: [
        {
          title: 'Truck',
          desc: 'Fasilitas pembiayaan mobil Truck jenis Light Truck dan Heavy Truck',
          img: img1
        },
        {
          title: 'Angkutan',
          desc: 'Fasilitas pembiayaan mobil Angkutans jenis Minibus atau Mikrobus',
          img: img2
        },{
          title: 'Pick Up',
          desc: 'Fasilitas pembiayaan mobil Pick Up model Box maupun model Bak',
          img: img3
        },{
          title: 'Passenger',
          desc: 'Fasilitas pembiayaan mobil Sedan, MPV dan SUV',
          img: img4
        }
      ]
    }
  }
}
</script>
