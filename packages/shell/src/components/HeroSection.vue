<template>
  <v-sheet
    class="pt-0 px-4"
    rounded="lg"
    style="background: linear-gradient(180deg, #e5ece5 0%, #7f976f 100%)"
  >
    <v-container class="pa-0 px-xl-10">
      <v-row align="center" class="g-6" justify="space-between" wrap>
        <v-col class="text-center" cols="12">
          <v-row>
            <v-col class="text-left mt-10" cols="9" lg="6" md="5" order-md="2" style="min-height: 140px">
              <h1 class="text-h4 font-weight-bold mb-3" style="color:#163528; line-height:1.05">
                Dřeviny a rostliny <br>vhodné pro pěstování v obývacím pokoji
              </h1>
              <v-btn
                class="text-none mb-4"
                color="success"
                elevation="2"
                style="border-radius:6px; padding:10px 18px; font-weight:600"
                to="/products"
                variant="elevated"
              >
                Přejít k nákupu
              </v-btn>
            </v-col>
            <v-col class="ma-0 pa-0 d-flex justify-center" cols="3" lg="2" md="3" order-md="1">
              <v-img
                :max-width="$vuetify.display.mdAndUp ? 290 : 240"
                :src="hangedPlant"
                cover
                height="auto"
                role="img"
                rounded="lg"
                style="position: absolute; z-index: 10"
                width="100%"
              />
            </v-col>
            <v-col v-if="$vuetify.display.mdAndUp" class="ma-0 pa-0 d-flex justify-center" cols="4" order-md="3">
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

        <v-col class="d-flex justify-center" cols="12" lg="7" md="6">
          <v-card class="pa-5" elevation="0" rounded="lg">
            <v-card-text>
              <p class="mb-3" style="color:#2e4039">
                Výsadba stromů představuje odborný proces přesazování stromových sazenic, který je nejčastěji využíván v
                lesnictví, zahradnictví a při obnově krajiny. Tento proces se soustředí především na práci s mladými
                rostlinami, které se teprve adaptují na nové prostředí, a klade důraz na správný výběr dřevin s ohledem
                na klimatické podmínky, typ půdy a zamýšlené využití prostoru. Na rozdíl od...
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

        <v-col aria-hidden="true" class="d-flex justify-center" cols="12" lg="5" md="6">
          <v-img
            :max-width="$vuetify.display.mdAndUp ? 520 : undefined"
            :src="plantsAtelier"
            alt="Plants and shop"
            aria-label="Plants and shop"
            cover
            height="auto"
            max-height="360"
            role="img"
            rounded="lg"
            width="100%"
          />
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
