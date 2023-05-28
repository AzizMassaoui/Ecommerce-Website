<script setup></script>
<template>
  <div class="landing">
    <!-- Carousel -->
    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active c-item">
          <img
            src="../assets/Corousel1.jpg"
            class="d-block w-100 c-img"
            alt="Slide 1"
          />
          <div class="carousel-caption top-1 mt-4">
            <p class="display-1 fw-bolder text-capitalize">fast delivery</p>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img
            src="../assets/Carousel2.jpg"
            class="d-block w-100 c-img"
            alt="Slide 2"
          />
          <div class="carousel-caption top-1 mt-4">
            <p class="display-1 fw-bolder text-capitalize">
              guaranteed excellent quality
            </p>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img
            src="../assets/Carousel.avif"
            class="d-block w-100 c-img"
            alt="Slide 3"
          />
          <div class="carousel-caption top-1 mt-4">
            <p class="display-1 fw-bolder text-capitalize">
              user-friendly interface
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container">
      <div class="text">
        <h1>Melodic Store</h1>
        <p>
          Purchase the merchandise and music records of your favorite artists.
        </p>
      </div>
      <div class="image">
        <img src="../assets/OnlineShop.jpg" alt="aa" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing {
  min-height: 100vh;
}
.landing .container {
  display: flex;
  align-items: center;
  padding-bottom: 120px;
}
.landing .text {
  flex: 1;
}
@media (max-width: 991px) {
  .text {
    text-align: center;
  }
}
.text h1 {
  font-size: 40px;
  margin: 0;
}
@media (max-width: 767px) {
  .text h1 {
    font-size: 28px;
  }
}
.text p {
  font-size: 24px;
  line-height: 1.7;
  margin: 5px 0 0;
  color: #777;
  max-width: 500px;
}
@media (max-width: 991px) {
  .text p {
    margin: 10px auto;
  }
}
@media (max-width: 767px) {
  .text p {
    font-size: 18px;
  }
}

.image img {
  position: relative;
  width: 600px;
  max-width: 100%;
  animation: up-and-down 5s linear infinite;
}
@media (max-width: 991px) {
  .image {
    display: none;
  }
}

.c-item {
  height: 600px;
}

.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}
.carousel.slide {
  margin-bottom: 50px;
}
/* Animation */
@keyframes up-and-down {
  0%,
  100% {
    top: 0;
  }
  50% {
    top: -40px;
  }
}
</style>
