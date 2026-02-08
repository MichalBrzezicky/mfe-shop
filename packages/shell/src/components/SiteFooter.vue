<template>
  <v-footer padless>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="brand">
            <RouterLink aria-label="PlantBase home" class="footer-logo-link" to="/">
              <img :src="logo" alt="PlantBase" class="site-logo-footer" />
            </RouterLink>
          </div>
          <p class="muted">{{ $t('shell.components.SiteFooter.title') }}</p>
        </v-col>

        <v-col cols="6" md="3">
          <h6>{{ $t('shell.components.SiteFooter.sections.store.title') }}</h6>
          <ul>
            <li>
              <RouterLink to="/products">{{
                  $t('shell.components.SiteFooter.sections.store.links.indoorPlants')
                }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/products?filter=new">{{
                  $t('shell.components.SiteFooter.sections.store.links.newArrivals')
                }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/products?filter=sale">{{
                  $t('shell.components.SiteFooter.sections.store.links.onSale')
                }}
              </RouterLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="6" md="3">
          <h6>{{ $t('shell.components.SiteFooter.sections.company.title') }}</h6>
          <ul>
            <li>
              <RouterLink to="/about">{{
                  $t('shell.components.SiteFooter.sections.company.links.aboutUs')
                }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact">{{
                  $t('shell.components.SiteFooter.sections.company.links.contact')
                }}
              </RouterLink>
            </li>
          </ul>
        </v-col>

        <v-col class="text-center mt-6" cols="12">
          <small>{{ $t('shell.components.SiteFooter.projectInfo') }}</small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import logo from '../assets/logo.png'
</script>

<style scoped>
  .brand {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .footer-logo-link {
    display: inline-flex;
    align-items: center
  }

  .site-logo-footer {
    height: 36px;
    width: auto
  }

  .muted {
    color: rgba(0, 0, 0, 0.6);
    margin-top: 8px
  }

  v-footer {
    background: transparent
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 8px 0
  }

  li {
    margin: 6px 0
  }

  a {
    color: inherit;
    text-decoration: none
  }
</style>
