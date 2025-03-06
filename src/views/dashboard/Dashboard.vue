<script setup lang="ts">
const serviceMenu = [
  {
    icon: 'mdi-history',
    colorIcon: '#6dd3d1',
    title: 'Chính sách đổi trả',
    description:
      'Sẵn sàng đổi trả trong vòng 24h nếu quý khách không ưng ý mà không mất thêm bất cứ khoản chi phí nào'
  },
  {
    icon: 'mdi-thumb-up',
    colorIcon: '#fabc59',
    title: 'Đội ngũ chuyên nghiệp',
    description:
      'Với đội ngũ nhân viên có kinh nghiệm, nhiệt tình sẽ mang đến cho bạn dịch vụ hoàn hảo nhất.'
  },
  {
    icon: 'mdi-air-plane',
    colorIcon: '#f1805f',
    title: 'Chính sách vận chuyển',
    description:
      'Miễn phí vận chuyển cho các đơn hàng trên toàn quốc, hỗ trợ chi phí cho các bạn hàng nước ngoài.'
  }
]

const reasonMenu = [
  {
    icon: 'mdi-arrow-down',
    colorIcon: '#6dd3d1',
    title: 'Giá cả tối ưu',
    description:
      'DEKOR mang đến cho bạn những sản phẩm tốt nhất với thiết kế tinh tế và giá cả phù hợp với từng đối tượng khách hàng.'
  },
  {
    icon: 'mdi-arrow-left-right',
    colorIcon: '#f1805f',
    title: 'Lắp đặt nhanh chóng',
    description:
      'DEKOR sẽ tới tận nơi lắp đặt nhanh chóng cho bạn trong vòng 24h kể từ lúc mua hàng. Tư vấn miễn phí về vị trí lắp đặt.'
  },
  {
    icon: 'mdi-cog',
    colorIcon: '#fabc59',
    title: 'Dịch vị hậu mãi tốt nhất',
    description:
      'DEKOR đảm bảo mang đến cho bạn dịch vụ chăm sóc khách hàng tốt nhất, bảo hành trong vòng 1 năm cho tất cả sản phẩm.'
  },
  {
    icon: 'mdi-sync',
    colorIcon: '#fabc59',
    title: 'Thiết kế theo yêu cầu',
    description:
      'DEKOR nhận thiết kế theo mọi ý tưởng bạn có thể nghĩ ra, mọi thiết kế bạn muốn.'
  },
  {
    icon: 'mdi-lightbulb',
    colorIcon: '#6dd3d1',
    title: 'Khuyến mại đi kèm',
    description:
      'DEKOR luôn luôn có khuyến mại kèm theo cho tất cả các hóa đơn dù lớn hay nhỏ.'
  },
  {
    icon: 'mdi-gamepad-variant',
    colorIcon: '#f1805f',
    title: 'Miễn phí vận chuyển',
    description: 'DEKOR miễn phí vận chuyển cho mọi đơn hàng trên Toàn quốc.'
  }
]

import BlogItem from '@/components/BlogItem.vue'
import ProductItem from '@/components/ProductItem.vue'
</script>

<template>
  <div>
    <section>
      <v-img src="@/assets/imgs/slider_1.webp">
        <template #sources>
          <source srcset="@/assets/imgs/slider_1.webp" />
        </template>
      </v-img>
    </section>
    <section style="padding: 60px 0">
      <v-container>
        <v-row no-gutters class="py-3">
          <v-col cols="6" style="padding-right: 54px">
            <v-img src="@/assets/imgs/about_video.webp">
              <template #sources>
                <source srcset="@/assets/imgs/about_video.webp" />
              </template>
            </v-img>
          </v-col>
          <v-col cols="6" class="px-4">
            <div
              class="text-h5 pt-3 pb-5 title-section-about"
              style="font-weight: 700"
            >
              Xin chào! Chúng tôi là Dekor
            </div>
            <div class="py-3 mt-2" style="font-size: 14px; line-height: 25px">
              Đầu tiên Dekor xin gửi lời chào, kính chúc sức khỏe, thành công và
              lời cảm ơn đến Quý khách hàng đã ủng hộ những sản phẩm của chúng
              tôi. Với hơn 10 năm kinh nghiệm về sản xuất, kinh doanh, thiết kế
              và thi công sản phẩm nội thất phục vụ cho không gian: phòng khách
              gia đình, nhà hàng, café, khách sạn, bar… Dekor thấu hiểu được nhu
              cầu và thị hiếu của người tiêu dùng, tập thể chúng tôi luôn chú
              trọng đầu tư, thiết kế những sản phẩm chất lượng nhằm mang đến một
              không gian sống thật thoải mái, ấm cúng và tiện nghi cho người sử
              dụng.
            </div>
            <v-btn
              height="52"
              variant="outlined"
              class="text-caption text-uppercase px-11 mt-7 mb-3"
              style="font-weight: 700"
              >Xem chi tiết</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <div style="background-color: aliceblue">
        <v-container>
          <v-row no-gutters>
            <v-col
              v-for="(service, index) in serviceMenu"
              :key="index"
              class="text-center"
              cols="4"
            >
              <div style="width: 320px; height: 320px" class="mx-auto py-15">
                <v-icon size="60" :color="service.colorIcon">{{
                  service.icon
                }}</v-icon>
                <div
                  class="text-body-1 text-uppercase pt-7 pb-1"
                  style="font-weight: 700"
                >
                  {{ service.title }}
                </div>
                <div class="text-body-2 py-3 px-10">
                  {{ service.description }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section class="reason">
      <div
        style="background-color: #f1805f; padding-bottom: 80px"
        class="pt-11"
      >
        <div
          class="reason-title text-h6 text-uppercase text-center py-6"
          style="color: white; font-weight: 700"
        >
          Lý do bạn nên chọn chúng tôi
        </div>
      </div>
      <div style="background-color: #ffffffb3" class="py-10">
        <v-container>
          <v-row no-gutters>
            <v-col
              v-for="(reason, index) in reasonMenu"
              :key="index"
              class="text-end px-4 my-15"
              cols="4"
            >
              <div>
                <div class="d-flex justify-end">
                  <div
                    :style="{
                      width: '48px',
                      height: '48px',
                      backgroundColor: reason.colorIcon,
                      borderRadius: '50%'
                    }"
                    class="d-flex justify-center align-center"
                  >
                    <v-icon size="28" color="white">{{ reason.icon }}</v-icon>
                  </div>
                </div>
                <div class="text-body-1 pt-7 pb-1" style="font-weight: 700">
                  {{ reason.title }}
                </div>
                <div class="text-body-2 py-3">
                  {{ reason.description }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section>
      <div style="background-color: white" class="pt-10 pb-11">
        <div
          class="favorite-title text-h6 text-uppercase text-center py-6"
          style="color: black; font-weight: 700"
        >
          Được ưa thích nhất
        </div>
      </div>
      <div style="background-color: white">
        <v-container>
          <v-row no-gutters class="px-n3">
            <v-col cols="3" v-for="i in 4" :key="i" class="px-3">
              <product-item></product-item>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-center">
              <v-btn
                height="52"
                variant="outlined"
                class="text-caption text-uppercase px-11 mt-7 mb-3"
                style="font-weight: 700"
                >Xem thêm</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section class="collection">
      <div style="background-color: #0000004d" class="h-100">
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" style="padding-top: 145px; padding-bottom: 185px">
              <div
                class="text-h6 text-uppercase text-white mb-2 text-center"
                style="letter-spacing: 5px !important; line-height: 30px"
              >
                - Bộ sưu tập nội thất Överallt -
              </div>
              <div
                class="text-h6 text-white px-10 text-center"
                style="
                  border: 1px solid white;
                  letter-spacing: 7px !important;
                  line-height: 40px;
                "
              >
                Một sự kết hợp đặc biệt giữa IKEA và những nhà thiết kế hàng đầu
                Châu Phi
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section>
      <div style="background-color: #6dd3d1" class="pt-10 pb-11">
        <div
          class="outstanding-title text-h6 text-uppercase text-center py-6"
          style="color: white; font-weight: 700"
        >
          Danh mục nổi bật
        </div>
      </div>
      <div>
        <v-container fluid class="pa-0">
          <v-row no-gutters>
            <v-col cols="6">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-img height="280" cover src="@/assets/imgs/category_1.webp">
                    <template #sources>
                      <source srcset="@/assets/imgs/category_1.webp" />
                    </template>
                  </v-img>
                </v-col>
                <v-col cols="12">
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-img
                        height="560"
                        cover
                        src="@/assets/imgs/category_4.webp"
                      >
                        <template #sources>
                          <source srcset="@/assets/imgs/category_4.webp" />
                        </template>
                      </v-img>
                    </v-col>
                    <v-col cols="6">
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-img
                            height="280"
                            cover
                            src="@/assets/imgs/category_5.webp"
                          >
                            <template #sources>
                              <source srcset="@/assets/imgs/category_5.webp" />
                            </template>
                          </v-img>
                        </v-col>
                        <v-col cols="12">
                          <v-img
                            height="280"
                            cover
                            src="@/assets/imgs/category_7.webp"
                          >
                            <template #sources>
                              <source srcset="@/assets/imgs/category_7.webp" />
                            </template>
                          </v-img>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row no-gutters>
                <v-col cols="6">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-img
                        height="280"
                        cover
                        src="@/assets/imgs/category_2.webp"
                      >
                        <template #sources>
                          <source srcset="@/assets/imgs/category_2.webp" />
                        </template>
                      </v-img>
                    </v-col>
                    <v-col cols="12">
                      <v-img
                        height="280"
                        cover
                        src="@/assets/imgs/category_6.webp"
                      >
                        <template #sources>
                          <source srcset="@/assets/imgs/category_6.webp" />
                        </template>
                      </v-img>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-img height="560" cover src="@/assets/imgs/category_3.webp">
                    <template #sources>
                      <source srcset="@/assets/imgs/category_3.webp" />
                    </template>
                  </v-img>
                </v-col>
                <v-col cols="6">
                  <v-img height="280" cover src="@/assets/imgs/category_3.webp">
                    <template #sources>
                      <source srcset="@/assets/imgs/category_3.webp" />
                    </template>
                  </v-img>
                </v-col>
                <v-col cols="6">
                  <v-img height="280" cover src="@/assets/imgs/category_4.webp">
                    <template #sources>
                      <source srcset="@/assets/imgs/category_4.webp" />
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section>
      <div style="background-color: white" class="pt-10 pb-11">
        <div
          class="news text-h6 text-uppercase text-center py-6"
          style="color: black; font-weight: 700"
        >
          Được ưa thích nhất
        </div>
      </div>
      <div style="background-color: white">
        <v-container>
          <v-row no-gutters class="px-n10">
            <v-col cols="6" class="px-10">
              <blog-item></blog-item>
            </v-col>
            <v-col cols="6" class="px-10">
              <blog-item></blog-item>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-center mt-10">
              <v-btn
                height="52"
                variant="outlined"
                class="text-caption text-uppercase px-11 mt-7 mb-3"
                style="font-weight: 700"
                >Xem thêm</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section>
      <div style="background-color: #f5f5f5; padding: 120px 0">
        <v-container class="pa-0">
          <v-row no-gutters>
            <v-col cols="2">
              <v-img class="mx-8" height="104" src="@/assets/imgs/hieu_1.webp">
                <template #sources>
                  <source srcset="@/assets/imgs/hieu_1.webp" />
                </template>
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img class="mx-8" height="104" src="@/assets/imgs/hieu_2.webp">
                <template #sources>
                  <source srcset="@/assets/imgs/hieu_2.webp" />
                </template>
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img class="mx-8" height="104" src="@/assets/imgs/hieu_1.webp">
                <template #sources>
                  <source srcset="@/assets/imgs/hieu_1.webp" />
                </template>
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img class="mx-8" height="104" src="@/assets/imgs/hieu_2.webp">
                <template #sources>
                  <source srcset="@/assets/imgs/hieu_2.webp" />
                </template>
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img class="mx-8" height="104" src="@/assets/imgs/hieu_1.webp">
                <template #sources>
                  <source srcset="@/assets/imgs/hieu_1.webp" />
                </template>
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img class="mx-8" height="104" src="@/assets/imgs/hieu_2.webp">
                <template #sources>
                  <source srcset="@/assets/imgs/hieu_2.webp" />
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.title-section-about {
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 3px;
    content: '';
    background: #333333;
  }
}
.reason {
  background-image: url('@/assets/imgs/bg_11.webp');
  background-size: cover;
  background-attachment: fixed !important;
  background-position: 0;
  .reason-title {
    position: relative;
    &::after {
      position: absolute;
      width: 20px;
      height: 3px;
      margin-left: -10px;
      left: 50%;
      background: white;
      content: '';
      bottom: 0;
    }
  }
}

.favorite-title,
.news {
  position: relative;
  &::after {
    position: absolute;
    width: 20px;
    height: 3px;
    margin-left: -10px;
    left: 50%;
    background: black;
    content: '';
    bottom: 0;
  }
}

.collection {
  background-image: url('@/assets/imgs/bg_12.webp');
  background-size: cover;
  background-attachment: fixed !important;
  background-position: 0;
}

.outstanding-title {
  position: relative;
  &::after {
    position: absolute;
    width: 20px;
    height: 3px;
    margin-left: -10px;
    left: 50%;
    background: white;
    content: '';
    bottom: 0;
  }
}
</style>
