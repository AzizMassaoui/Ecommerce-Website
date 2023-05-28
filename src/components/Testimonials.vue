<script setup></script>

<template>
  <div class="testimonials">
    <h2 class="main-title">Testimonials</h2>
    <div class="container">
      <div class="box">
        <img class="avatar" src="../assets/avatar-01.png" />
        <h3>Ayoub</h3>

        <div class="rate">
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
        </div>
        <p>
          I ordered a very specific product and it was brought to my doorstep in
          a reasonable amount of time, thank you Melodic Store!
        </p>
      </div>
      <div class="box">
        <img class="avatar" src="../assets/avatar-02.png" />
        <h3>Khalil</h3>

        <div class="rate">
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="half-filled" src="../assets/star-half.svg" alt="" />
        </div>
        <p>
          Great experience with Melodic Store, same shipping prices if you
          intended to use shipping website , fast delivery and well preserved
          items. Thanks!
        </p>
      </div>
      <div class="box">
        <img class="avatar" src="../assets/avatar-03.png" />
        <h3>Mohamed</h3>

        <div class="rate">
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
        </div>
        <p>
          Product is authentic. Fast shipping. Wide variety of products to
          choose from. Site is easy to use.
        </p>
      </div>
      <div class="box">
        <img class="avatar" src="../assets/avatar-04.png" />
        <h3>Aziz</h3>

        <div class="rate">
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="empty" src="../assets/star.svg" alt="" />
        </div>
        <p>
          This is a great store with nice prices. I found the goods I needed
          only there. Really pleased.
        </p>
      </div>
      <div class="box">
        <img class="avatar" src="../assets/avatar-05.png" />
        <h3>Amin</h3>

        <div class="rate">
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
        </div>
        <p>
          Excellent and attentive customer service. Keeps you updated. Faster
          delivery than expected as well. Overall perfect service.
        </p>
      </div>
      <div class="box">
        <img class="avatar" src="../assets/avatar-06.png" />
        <h3>Abdou</h3>

        <div class="rate">
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
          <img class="filled" src="../assets/star-fill.svg" alt="" />
        </div>
        <p>
          Nice online shop. Highly recommended for online buyers like me.
          Representative is easy to talk with and very accommodating. Tracking
          of purchase is fast and reliable, Secured and well-packed.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.testimonials {
  padding-top: 60px;
  padding-bottom: 30px;
  position: relative;
  background: #f3f3f3;
}
.testimonials .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
}
.testimonials .box {
  padding: 20px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%);
  border-radius: 5px;
  position: relative;
  background-color: white;
}
.testimonials .box .avatar {
  position: absolute;
  right: -10px;
  top: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #f3f3f3;
}
.testimonials .box h3 {
  margin: 0 0 10px;
}
.testimonials .box p {
  line-height: 1.5;
  color: #777;
  margin-top: 10px;
}
.main-title {
  text-align: center;
  padding-bottom: 40px;
}
</style>
