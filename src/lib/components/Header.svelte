<header
  class="grid grid-cols-3 items-center bg-primary-200-700-token py-2 px-4"
>
  <div><slot name="left" /></div>
  <div class="justify-self-center text-center font-bold text-lg">
    <slot name="middle">When Did I?</slot>
  </div>
  <div class="justify-self-end"><slot name="right" /></div>
</header>
