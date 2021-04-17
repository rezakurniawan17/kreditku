<template>
  <section id="contact-app">
    <div class="container px-1 pt-24 pb-24 mx-auto lg:pb-0">
      <div class="flex justify-center">
      <img src="../assets/img/contact.png" alt="">
    </div>
      <div class="flex flex-col items-center mt-10 lg:flex-row">
        <div class="relative justify-center hidden w-6/12 pr-6 lg:bottom-0 xl:bottom-0 lg:inline-flex">
          <img src="../assets/img/contact-img.png" alt="">
        </div>
        <div class="w-full px-2 mx-auto lg:p-5 lg:w-6/12">
          <h5 class="mb-8 text-3xl font-bold text-center lg:text-4xl lg:text-left text-heading">Hubungi kreditku</h5>
          <div class="grid grid-cols-2 gap-2 mx-auto lg:gap-6">
            <div v-for="contact in contacts" :key="contact.id" class="w-full h-auto px-2 py-8 mx-auto overflow-hidden text-center sm:w-8/12 md:w-11/12 lg:w-full lg:px-4 xl:px-6 lg:py-10 rounded-xl shadow-primary">
              <img class="items-center inline-block w-12 xl:w-18 lg:w-16" :src="contact.img" alt="">
              <h6 class="mt-4 text-lg font-bold lg:text-xl text-title">{{ contact.type }}</h6>
              <p class="mt-2 text-sm text-captions">{{ contact.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import call from '../assets/img/phone-call.svg'
import whatsapp from '../assets/img/whatsapp.svg'
import email from '../assets/img/email.svg'
export default {
  data() {
    return {
      contacts: [
        {
          type: 'Telepon',
          desc: '(024)-xxx-xxx',
          img: call
        },
        {
          type: 'Whatsapp',
          desc: '(085)-xxx-xxx-xxxx',
          img: whatsapp
        },
        {
          type: 'Whatsapp',
          desc: '(081)-xxx-xxx-xxxx',
          img: whatsapp
        },
        {
          type: 'Email',
          desc: 'kreditku@gmail.com',
          img: email
        }
      ]
    }
  }
}
</script>