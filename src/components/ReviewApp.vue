<template>
  <section id="review-app" class="hidden">
    <div class="container px-5 py-24 mx-auto">
      <!-- Title -->
      <div class="relative w-10/12 mx-auto mb-10">
        <h3 class="text-4xl font-bold text-center lg:text-left text-heading">
          Apa yang mereka katakan tentang Kreditku ?
        </h3>
        <!-- <img class="absolute top-0 right-[-50px] z-[-99]" src="../assets/img/quote-mark.svg" alt=""> -->
      </div>
      <!-- Review -->
      <div class="w-full mx-auto lg:w-10/12">
        <carousel :breakpoints="breakpoints" :wrap-around="true" :transition="1000">
          <slide v-for="review in reviews" :key="review.id">
            <div  class="flex flex-col w-full px-10 py-24 mx-4 overflow-hidden rounded-md shadow-lg md:max-w-5xl">
              <p class="text-lg italic lg:text-2xl text-captions">"{{ review.caption }}"</p>
              <div class="flex items-center mx-auto mt-8">
                <img class="w-16" :src="review.img" alt="Review Image 1">
                <div class="ml-4">
                  <p class="text-lg font-bold lg:text-xl text-title">{{ review.name }}</p>
                  <p class="text-sm text-captions lg:text-base">{{ review.city }}, {{ review.job }}</p>
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <Navigation class="hidden"/>
            <Pagination/>
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import review1 from '../assets/img/review1.png'
import review2 from '../assets/img/review2.png'
import review3 from '../assets/img/review3.png'
import review4 from '../assets/img/review4.png'
import review5 from '../assets/img/review5.png'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  data() {
    return {
      breakpoints: {
        100: {
          itemsToShow: 1,
          snapAlign: 'center'
        },
        720: {
          itemsToShow: 1,
          snapAlign: 'left'
        }
      },
      reviews: [
        {
          name: 'Marion Jola',
          city: 'Jakarta',
          job: 'Enterpreneur',
          caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          img: review1
        },
        {
          name: 'Jonathan Walker',
          city: 'Surabaya',
          job: 'Enterpreneur',
          caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          img: review2
        },
        {
          name: 'Michael Channigan',
          city: 'Bandung',
          job: 'Enterpreneur',
          caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          img: review3
        },
        {
          name: 'Ahmad Zaki',
          city: 'Jakarta',
          job: 'Enterpreneur',
          caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          img: review4
        },
        {
          name: 'Johnson W',
          city: 'Bogor',
          job: 'Enterpreneur',
          caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          img: review5
        },
        {
          name: 'Zabaretha',
          city: 'Palembang',
          job: 'Enterpreneur',
          caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          img: review1
        },
      ]
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>