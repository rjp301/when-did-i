<script lang="ts">
  import type { PageData } from "./$types";
  import { format } from "timeago.js";

  export let data: PageData;
</script>

<dl class="list-dl divide-y">
  {#each data.actions as action}
    <div>
      <span class="badge text-xl">{action.icon}</span>
      <span class="flex-auto">
        <dt>{action.name}</dt>
        <dd><small>{format(action.created)}</small></dd>
      </span>
      <a href={`/actions/${action.id}`} class="btn btn-icon">→</a>
    </div>
  {/each}
  <!-- ... -->
</dl>
