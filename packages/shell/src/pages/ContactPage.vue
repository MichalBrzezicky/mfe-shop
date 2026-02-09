<template>
  <v-container class="pb-5 pt-3">
    <v-row class="mx-0 px-0" justify="center">
      <v-col class="mx-0 px-0" cols="12">
        <v-img
          :src="plantsAtelier"
          alt="Plants and shop"
          aria-label="Plants and shop"
          cover
          height="auto"
          max-height="400"
          role="img"
          rounded="lg"
          width="100%"
        />
      </v-col>
      <v-col class="mx-0 px-0" cols="12">
        <v-card :color="'#eff3ef'" class="ma-0" elevation="0" rounded="lg">

          <template v-slot:title>
            <v-row class="ma-0 my-6 pa-0 text-center" justify="center">
              <v-col class="ma-0 pa-0" cols="12">
                <span class="text-h4">{{ $t('shell.components.ContactPage.subheader') }}</span>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12">
                <span class="text-h3 text-green-darken-4">{{ $t('shell.components.ContactPage.header') }}</span>
              </v-col>
              <v-col class="my-1 pa-0" cols="12">
                <span class="text-subtitle-1">{{ $t('shell.components.ContactPage.subtitle') }}</span>
              </v-col>
            </v-row>
          </template>


          <template v-slot:text>
            <v-form @submit.prevent="submit">
              <v-row class="ma-0 pa-0" dense>
                <v-col class="ma-0 pa-2" cols="12">
                  <v-text-field
                    v-model="form.email"
                    :label="$t('shell.components.ContactPage.labels.email')"
                    flat
                    hide-details
                    prepend-inner-icon="mdi-email-outline"
                    required
                    type="email"
                    variant="solo"
                  />
                </v-col>
                <v-col class="ma-0 pa-2" cols="12">
                  <v-textarea
                    v-model="form.message"
                    :label="$t('shell.components.ContactPage.labels.message')"
                    flat
                    hide-details
                    prepend-inner-icon="mdi-message-outline"
                    required
                    rows="4"
                    variant="solo"
                  />
                </v-col>
                <v-col class="ma-0 pa-2" cols="12" sm="6">
                  <v-text-field
                    v-model="form.name"
                    :label="$t('shell.components.ContactPage.labels.name')"
                    flat
                    hide-details
                    prepend-inner-icon="mdi-account-outline"
                    required
                    variant="solo"
                  />
                </v-col>
                <v-col class="ma-0 pa-2" cols="12" sm="6">
                  <v-text-field
                    v-model="form.phone"
                    :label="$t('shell.components.ContactPage.labels.phone')"
                    flat
                    hide-details
                    prepend-inner-icon="mdi-phone-outline"
                    required
                    variant="solo"
                  />
                </v-col>
                <v-col class="ma-0 pa-2 text-center" cols="12">
                  <v-btn
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    {{ $t('shell.components.ContactPage.labels.send') }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </template>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 px-0">
      <v-col class="mx-0 px-0" cols="12" md="6">
        <v-row class="ma-0 pa-0 text-body-1" dense>
          <v-col class="ma-0 px-0 py-1" cols="12">
            <v-icon class="mx-1">mdi-clock</v-icon>
            {{ $t('shell.components.ContactPage.labels.workingDays') }}
          </v-col>
          <v-col class="ma-0 px-0 py-1" cols="12">
            <v-icon class="mx-1" />
            {{ $t('shell.components.ContactPage.labels.saturday') }}
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mx-0 px-0" cols="12" md="6">
        <v-row class="ma-0 pa-0 text-body-1" dense>
          <v-col class="ma-0 px-0 py-1" cols="12">
            <v-icon class="mx-1">mdi-phone</v-icon>
            + 420 123 456 789
          </v-col>
          <v-col class="ma-0 px-0 py-1" cols="12">
            <v-icon class="mx-1">mdi-email</v-icon>
            info@plantbase.cz
          </v-col>
          <v-col class="ma-0 px-0 py-1" cols="12">
            <v-icon class="mx-1">mdi-map-marker</v-icon>
            Rostlinová 123, 180 00 Praha, Czech Republic
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { reactive } from 'vue'
  import plantsAtelier from '../assets/plantsAtelier.png'

  const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  function submit() {
    console.log('Contact form submit', { ...form })

    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
  }
</script>
