<script lang="ts">
  import type { PageLoad } from "./$types";
  import { format } from "timeago.js";

  export let data: PageLoad;
</script>

<dl class="list-dl divide-y">
  {#each data.events as event}
    <div>
      {event.time}
    </div>
  {/each}
  <!-- ... -->
</dl>
