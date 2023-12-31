console.log("JSOK");
// Controllo JS
console.log("JSOK");

// Controllo Vue

console.log("Vue OK", Vue);

// Estarpolo il metodo createApp

const { createApp } = Vue;

// Inizializzo l'app Vue

const app = createApp({
  // Data

  data() {
    return {
      autoPlay: null,
      currentIndex: 0,
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  // Methods
  methods: {
    // Next Image
    goNext() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    // Prev Image
    goPrev() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    // Image Selected
    isSelected(index) {
      return index === this.currentIndex;
    },
    // Set Current Index on Click
    setCurrentIndex(index) {
      return (this.currentIndex = index);
    },
    // Start Autoplay
    startAutoplay() {
      this.autoPlay = setInterval(this.goNext, 3000);
    },
    // Clear Autoplay
    clearAutoplay() {
      clearInterval(this.autoPlay);
    },
  },
  // Autoplay
  mounted() {
    this.autoPlay = setInterval(this.goNext, 3000);
  },
});

// La monto nell'elemento HTML

app.mount("#root");
