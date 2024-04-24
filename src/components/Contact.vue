<script setup lang="ts">
</script>

<template>
    <h1 class="Main-Title">Contact</h1>
    <h2>You can contact me via this form for any project proposition (Don't use it, not finished)</h2>
    <form action="https://formspree.io/f/moqyqzqz" class="form" method="POST">
        <input type="text" placeholder="Name" id="name" name="name" required>
        
        <input type="email" placeholder="E-mail" id="email" name="email" required>

        <input type="text" placeholder="Subject" id="subject" name="subject">

        <textarea id="message" placeholder="Message" name="message" required></textarea>

        <button type="submit">Send</button>
    </form>
    <h3>Or directly on my e-mail at : alexloup-dev@gmail.com if you prefer or on my network in <bold>About</bold> section</h3>
</template>