<template>
  <div class="layout">
    <div class="header">
      <NuxtLink to="/">
        <button>home</button>
      </NuxtLink>
      <NuxtLink to="/category">
        <button>category</button>
      </NuxtLink>
      <NuxtLink to="/cart">
        <button>cart</button>
      </NuxtLink>
      <NuxtLink to="/profile">
        <button>profile</button>
      </NuxtLink>
      <NuxtLink to="/login">
        <button>login</button>
      </NuxtLink>

      <div>我是header组件</div>
    </div>
    <slot></slot>
    <div class="footer">我是footer组件</div>
  </div>
</template>

<style>
.header,
.footer {
  background-color: pink;
}
</style>
