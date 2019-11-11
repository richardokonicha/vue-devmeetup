<template>
  <v-container>
    <v-row v-for="j in 100" :key="j" :class="j === 1 ? '' : 'mt-6'" no-gutters>
      <v-col v-for="i in j + 1" :key="i">
        <v-card class="pa-5" outlined>
          {{ i }} of {{j + 1 }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
