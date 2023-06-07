<script lang="ts">
  import type { PageData } from "./$types";
  import { format } from "timeago.js";

  export let data: PageData;
</script>

<dl class="list-dl divide-y">
  {#each data.events as event}
    <div>
      {event.time}
    </div>
  {/each}
  <!-- ... -->
</dl>
