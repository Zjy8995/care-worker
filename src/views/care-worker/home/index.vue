<template>
  <!-- <el-card class="home__card">
        <div class="home__card-title">
            首页
        </div>
    </el-card> -->
  <div class="container">
    <el-image
      class="card__image"
      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    ></el-image>
    <div class="main__right">
      <h3 style="margin-bottom: 10px">
        港风纯棉短袖T恤男夏季ins潮流打底衫设计感宽松卡通小熊半袖体恤
      </h3>
      <div class="main__price main__space">
        <div class="main__freight main__space">
          <el-space :size="40">
            <span>价格</span>
            <span style="text-decoration: line-through">￥109</span>
          </el-space>
        </div>
        <div class="main__freight main__space">
          <el-space :size="40">
            <span>促销价</span>
            <span class="main__freight-price">￥25.00</span>
          </el-space>
        </div>
        <div class="main__freight main__space">
          <el-space :size="40">
            <span>&emsp;&emsp;</span>
            <span class="main__freight-text">淘金币可抵扣商品价格3%</span>
          </el-space>
        </div>
      </div>
      <div class="main__freight main__space main__padding">
        <el-space :size="40">
          <span>运费</span>
          <span>浙江杭州 至 郑州 中原区</span>
        </el-space>
      </div>
      <div class="main__mounth-sale main__space main__padding">
        <el-space :size="40">
          <span>&emsp;&emsp;</span>
          <span>月销9000+</span>
        </el-space>
      </div>
      <div class="main__size main__space main__padding">
        <el-space :size="40">
          <span>尺码</span>
          <span>MLXL</span>
        </el-space>
      </div>
      <div class="main__color main__space main__padding">
        <el-space :size="40">
          <span>颜色</span>
          <span>颜色</span>
        </el-space>
      </div>
      <div class="main__count main__space main__padding">
        <el-space :size="40">
          <span>数量</span>
          <span>数量</span>
        </el-space>
      </div>
      <div class="main__btn">
        <el-button class="main__btn-buy" color="#ff0036" type="danger" plain
          >立即购买</el-button
        >
        <el-button class="main__btn-cart" color="#ff0036" type="danger"
          >加入购物车</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style>
/* .home__card {
  min-height: 80vh;
}

.home__card-title {
  margin-left: -20px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
}

.home__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
} */

.container {
  display: flex;
  justify-content: center;
}

.card__image {
  width: 418px;
  height: 418px;
  margin: 20px;
}

.main__right {
  margin: 20px;
}

.main__space {
  text-align: left;
}

.main__padding {
  padding: 10px 0;
}

.main__price {
  height: 85px;
}

.main__mounth-sale {
  border: 1px dotted #c9c9c9;
  border-width: 1px 0;
}

.main__freight-price {
  color: #fe0036;
  font-weight: 700;
  font-size: 30px;
}

.main__freight-text {
  color: #fe0036;
}

.main__btn {
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-left: 70px;
}

.main__btn-buy,
.main__btn-cart {
  flex: 0.4;
}
</style>
