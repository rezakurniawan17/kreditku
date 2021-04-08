<template>
  <section id="navbar-app" class="fixed z-50 w-full bg-white shadow-sm">
   <nav class="">
     <div class="container px-5 py-4 mx-auto bg-white lg:items-center lg:justify-between lg:flex">
       <!-- Nav Brand -->
       <div class="flex items-center justify-between">
         <span class="inline-flex">
          <h3 class="text-3xl font-extrabold lg:text-4xl text-primary">Kreditku 
          </h3>
          <svg id="Capa_1" enable-background="new 0 0 512 512" class="w-8 ml-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m495.484 239.484h-470.484c-9.122 0-16.516 7.395-16.516 16.516v140.817c0 9.122 7.395 16.516 16.516 16.516h470.484l16.516-8.688v-148.645c0-9.122-7.395-16.516-16.516-16.516z" fill="#f2f2f6"/><path d="m16.516 355.097v-107.597l-16.516 8.5v148.645c0 9.122 7.395 16.516 16.516 16.516h478.968c9.121 0 16.516-7.395 16.516-16.516h-445.935c-27.365 0-49.549-22.183-49.549-49.548z" fill="#e1e1e6"/><path d="m495.484 90.839h-478.968l-8.516 16.516v130.645l8.516 18h495.484v-148.645c0-9.122-7.395-16.516-16.516-16.516z" fill="#db4655"/><path d="m0 107.355v148.645h16.516v-165.161c-9.121 0-16.516 7.394-16.516 16.516z" fill="#bd4150"/></g></svg>
         </span>
          
        <button @click="showHamburger" class="w-7 h-7 rounded-sm lg:hidden hover:text-primary hover:ring-[#2468e6] ring-[#71717a] focus:ring-[#2468e6] focus:text-primary ring-2 text-captions focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
       </div>
       <!-- Nav Items -->
       <div :class="isOpen ? 'block' : 'hidden'" class="mt-4 space-y-4 lg:flex lg:space-y-0 lg:mt-0 lg:space-x-10 text-captions nav-items">
         <a href="#" class="block text-lg font-semibold lg:px-2 lg:inline-flex nav-list focus:text-primary hover:text-primary">Beranda</a>
         <a href="#" class="block text-lg font-semibold lg:px-2 lg:inline-flex nav-list focus:text-primary hover:text-primary">Profil</a>
         <a href="#" class="block text-lg font-semibold lg:px-2 lg:inline-flex nav-list focus:text-primary hover:text-primary">Produk</a>
         <a href="#" class="block text-lg font-semibold lg:px-2 lg:inline-flex nav-list focus:text-primary hover:text-primary">Layanan</a>
         <a href="#" class="block text-lg font-semibold lg:px-2 lg:inline-flex nav-list focus:text-primary hover:text-primary">Berita</a>
         <a href="#" class="block text-lg font-semibold lg:px-2 lg:inline-flex nav-list focus:text-primary hover:text-primary">Kontak</a>
       </div>
     </div>
   </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    showHamburger: function() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>