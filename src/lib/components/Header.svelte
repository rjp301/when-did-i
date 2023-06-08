<script>
  import { AppBar } from "@skeletonlabs/skeleton";

  export let title = "When Did I...?";
  export let backUrl = "";
</script>

<AppBar regionRowMain="h-12">
  <div slot="lead" class="w-7">
    {#if backUrl}
      <a href={backUrl} class="btn btn-icon">←</a>
    {/if}
  </div>
  <span class="font-bold text-lg">{title}</span>
  <div slot="trail">
    <slot name="right" />
  </div>
</AppBar>

