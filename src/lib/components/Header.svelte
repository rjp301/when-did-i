<script>
  export let title = "When Did I...?";
</script>

<header
  class="grid grid-cols-3 items-center bg-primary-200-700-token py-2 px-4 h-20"
>
  <div><slot name="left" /></div>
  <div class="justify-self-center text-center font-bold text-lg">
    {title}
  </div>
  <div class="justify-self-end"><slot name="right" /></div>
</header>
