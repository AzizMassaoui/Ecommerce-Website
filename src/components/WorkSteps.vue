<script setup></script>

<template>
  <div class="work-steps">
    <h2 class="main-title">How It Works?</h2>
    <div class="container">
      <div class="image">
        <img class="heart" src="../assets/heart.png" />
        <img src="../assets/onlineshop.png" alt="" />
      </div>
      <div class="info">
        <div class="box">
          <img src="../assets/online-shop.png" alt="" />
          <div class="text">
            <h3><span>1</span> Select</h3>
            <p>
              Choose which items you want to purchase from a variety of options,
              including music and merchandise...
            </p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/customer-service.png" alt="" />
          <div class="text">
            <h3><span>2</span> Confirm</h3>
            <p>
              You will receive a call from the customer service team to confirm
              your orders, information, address, and other details.
            </p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/cardboard-box.png" alt="" />
          <div class="text">
            <h3><span>3</span> Product</h3>
            <p>
              Items are carefully packaged inside proper shipping boxes. This
              stage include marking them with the addresses as well as any
              delivery instructions.
            </p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/delivery-truck.png" alt="" />
          <div class="text">
            <h3><span>4</span> Delivery</h3>
            <p>
              Orders are delivered to their destination. Within 24 hours, orders
              will be dispatched straight to the consumer.
            </p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/payment-method.png" alt="" />
          <div class="text">
            <h3><span>5</span> Payment</h3>
            <p>
              When the item is brought to your door, you pay the delivery person
              in cash on the spot. As evidence of payment, the delivery person
              will provide you a receipt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-steps {
  padding-top: 60px;
  padding-bottom: 30px;
  position: relative;
}
.work-steps .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 991px) {
  .work-steps .container {
    flex-direction: column;
  }
}
.work-steps .image {
  position: relative;
  max-width: 100%;
  margin-right: 100px;
}
@media (max-width: 576px) {
  .work-steps .image {
    display: none;
  }
}
.work-steps .image .heart {
  position: absolute;
  animation: up-and-down 2s linear infinite;
}
.work-steps .info .box {
  background-color: #f3f3f3;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
}
.work-steps .info .box:hover {
  filter: brightness(90%);
}

.work-steps .info .box img {
  width: 64px;
  margin-right: 20px;
}
.work-steps .info .box h3 {
  font-size: 22px;
  margin: 0;
}
.work-steps .info .box p {
  color: #777;
  line-height: 1.7;
  margin: 10px 0 0;
  font-size: 18px;
}
.main-title {
  text-align: center;
  padding-bottom: 40px;
}
span {
  width: 30px;
  background-color: #ff6364;
  color: white;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
}

/* Animation */
@keyframes up-and-down {
  0%,
  100% {
    top: 50px;
    left: 70px;
  }
  50% {
    top: 20px;
  }
}
</style>
