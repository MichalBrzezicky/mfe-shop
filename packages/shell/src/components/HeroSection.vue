<template>
  <v-sheet
    class="pt-0 px-4"
    style="background: linear-gradient(180deg, #e5ece5 0%, #e4eae0 100%)"
  >
    <v-container class="pa-0" style="max-width:1100px">
      <v-row align="center" class="g-6" justify="space-between" wrap>
        <v-col class="text-center" cols="12">
          <v-row>
            <v-col class="ma-0 pa-0 d-flex justify-center" cols="2">
              <v-img
                :src="hangedPlant"
                cover
                height="auto"
                max-width="300"
                role="img"
                rounded="lg"
                style="position: absolute; z-index: 10"
                width="100%"
              />
            </v-col>
            <v-col class="text-left mt-10" cols="6">
              <h1 class="text-h4 font-weight-bold mb-3" style="color:#163528; line-height:1.05">
                Dřeviny a rostliny <br>vhodné pro pěstování v obývacím pokoji
              </h1>
              <v-btn
                class="text-none mb-4"
                color="success"
                elevation="2"
                style="border-radius:6px; padding:10px 18px; font-weight:600"
                variant="elevated"
              >
                Přejít k nákupu
              </v-btn>
            </v-col>
            <v-col class="ma-0 pa-0 d-flex justify-center" cols="4">
              <v-img
                :src="plantSet"
                cover
                height="auto"
                max-width="350"
                role="img"
                rounded="lg"
                style="position: absolute; z-index: 10"
                width="100%"
              />
            </v-col>

          </v-row>
        </v-col>

        <v-col aria-hidden="true" class="d-flex justify-center" cols="12" md="6" order-md="2">
          <v-img
            :src="plantsAtelier"
            alt="Plants and shop"
            aria-label="Plants and shop"
            cover
            height="auto"
            max-height="360"
            max-width="520"
            role="img"
            rounded="lg"
            width="100%"
          />
        </v-col>

        <v-col cols="12" md="6" order-md="1">
          <v-card class="pa-5" elevation="0" max-width="520" rounded="lg">
            <v-card-text>
              <p class="mb-3" style="color:#2e4039">
                Výsadba stromů představuje odborný proces přesazování stromových sazenic, nejčastěji využívaný v
                lesnictví a při obnově krajiny. Na rozdíl od arboristiky se zaměřuje na mladé rostliny, nikoli na
                přesazování vzrostlých stromů, a klade důraz na správný výběr...
              </p>

              <a href="#" style="color:#2b8a56; font-weight:600; text-decoration:none">
                Zjistit více
                <v-icon>mdi-arrow-right-thin</v-icon>
              </a>

              <v-row align="center" class="mt-7" dense>
                <v-col cols="4">
                  <div style="font-weight:700; color:#122a22">200+</div>
                  <div style="font-size:0.85rem; color:#667a72">Druhů rostlin</div>
                </v-col>

                <v-col cols="4">
                  <div style="font-weight:700; color:#122a22">0.5k+</div>
                  <div style="font-size:0.85rem; color:#667a72">Odběratelů</div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  import plantsAtelier from '../assets/plantsAtelier.png'
  import hangedPlant from '../assets/hangedPlant.png'
  import plantSet from '../assets/plantSet.png'
</script>
