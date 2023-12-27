<script lang="ts">
export default {}
</script>

<template>
  <header class="banner">
    <div class="presentation">
      <img src="../../assets/images/logo.svg" alt="Cooking Up Logo" class="logo" />
      <p class="header-lg phrase-header">
        <span class="text-verde">A feast of ideas for</span>
        awaken the chef in you!
      </p>
      <p class="subtitle-lg">Explore new recipes every day with ingredients at your fingertips!</p>
    </div>

    <img src="../assets/images/image-banner.png" alt="" class="image-banner" />
  </header>
</template>

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--cream);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.phrase-header {
  margin-bottom: 2rem;
}

.text-verde {
  color: var(--mean-green, #3d6d4a);
}

.image-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .image-banner {
    width: min(100%, 21.25rem);
  }
}
</style>
