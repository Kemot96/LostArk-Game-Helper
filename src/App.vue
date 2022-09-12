
<template>
  <q-layout view="hhh lpr fff">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>

      </q-toolbar>

      <q-tabs>
        <q-route-tab to="/" label="Calculator" />
        <q-route-tab to="/merchants" label="Merchants" />
      </q-tabs>
    </q-header>

    <q-page-container>
        <router-view></router-view>
        
    </q-page-container>

  </q-layout>
</template>





 




