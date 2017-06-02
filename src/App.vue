<template>
  <div id="app">
    <v-app>
      <header>
        <template>
          <v-toolbar class="indigo" light>
            <v-toolbar-side-icon light></v-toolbar-side-icon>
            <v-toolbar-title class="hidden-sm-and-down">Toolbar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon light>
              <v-icon>account_circle</v-icon>
            </v-btn>
            <v-btn icon light>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon light>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <img src="./assets/iaf-logo/iaf-logo.svg" alt="iaf-logo" height="40px" width="40px"></img>
          </v-toolbar>
        </template>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
</style>
