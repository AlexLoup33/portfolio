<script setup lang="ts"> 
</script>

<template>
  <!-- Header -->
  <header>
    <nav>
      <h1>AlexLoup</h1>
      <ul>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
      <button class="contact">Contact</button>
    </nav>
  </header>
  <div id="app">
    <router-view />
  </div>
  <footer>
    <p>&copy; 2024</p>
  </footer>
</template>