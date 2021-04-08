<template>
  <section id="navbar-app" class="fixed z-50 w-full bg-white shadow-sm">
   <nav class="">
     <div class="container px-5 py-4 mx-auto bg-white lg:items-center lg:justify-between lg:flex">
       <!-- Nav Brand -->
       <div class="flex items-center justify-between">
        <h3 class="text-4xl font-extrabold text-primary">Kreditku</h3>
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