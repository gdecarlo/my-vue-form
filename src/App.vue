<template>
  <header>
    <h1>Pruebas con formularios</h1>
    <nav>
      <router-link to="/survey-1">Prueba 1</router-link>
      <router-link to="/survey-2">Prueba 2</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
}

header h1 {
  margin-bottom: 20px;
}

nav {
  display: flex;
  gap: 20px;
}

router-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

router-link:hover {
  text-decoration: underline;
}
</style>
