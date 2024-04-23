<script setup lang="ts"> 
</script>

<template>
  <!-- Header -->
  <header>
    <nav>
      <h1>AlexLoup</h1>
      <ul>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/skills">Skills</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div id="apps">
    <router-view />
  </div>
  <div>
    <footer>
      <p>&copy; 2024</p>
      <p>Created by <a href="https://github.com/AlexLoup33" target="_blanks">AlexLoup</a></p>
    </footer>
  </div>
</template>