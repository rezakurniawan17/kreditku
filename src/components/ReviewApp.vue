<template>
  <section id="review-app">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex justify-center lg:hidden">
        <img src="../assets/img/feedback.svg" />
      </div>
      <!-- Title -->
      <div class="relative w-10/12 mx-auto mt-10 mb-4 lg:mb-10">
        <h3 class="text-3xl font-extrabold text-center lg:text-5xl text-heading">
          Ulasan mereka tentang Kreditku
        </h3>
        <!-- <img class="absolute top-0 right-[-50px] z-[-99]" src="../assets/img/quote-mark.svg" alt=""> -->
      </div>
      <!-- Review -->
      <div class="w-full mx-auto lg:w-10/12">
        <swiper :slides-per-view="1" :space-between="50" :pagination="{ clickable: true, dynamicBullets: true }" :grab-cursor="true" :loop="true" class="pb-16 mx-auto overflow-x-hidden overflow-y-visible">
          <swiper-slide v-for="review in reviews" :key="review.id">
            <div class="flex flex-col justify-center w-full px-6 py-10 mx-auto overflow-hidden text-center rounded-lg lg:px-10 lg:py-20 lg:max-w-3xl shadow-primary md:max-w-5xl">
              <p class="text-base italic lg:text-2xl text-captions">"{{ review.caption }}"</p>
              <div class="flex items-center mx-auto mt-8 lg:mt-16">
                <img class="w-16 lg:w-24" :src="review.img" alt="Review Image 1">
                <div class="flex flex-col items-start ml-4 lg:ml-10">
                  <p class="text-lg font-bold lg:text-3xl text-primary">{{ review.name }}</p>
                  <p class="text-sm text-captions lg:text-lg">{{ review.city }}, {{ review.job }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
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

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, A11y])

export default {
  data() {
    return {
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
    Swiper,
    SwiperSlide
  },
}
</script>