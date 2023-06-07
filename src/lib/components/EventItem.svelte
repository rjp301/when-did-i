<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { pb } from "$lib/pocketbase";
  import formatDate from "$lib/utils/formatDate";
  import type { Record } from "pocketbase";

  export let event: Record;

  const remove = async () => {
    await pb.collection("events").delete(event.id);
    invalidateAll();
  };
</script>

<li class="py-2 flex items-center">
  <span class="flex-auto">{formatDate(new Date(event.time))}</span>
  <button class="btn btn-sm" on:click={remove}>delete</button>
</li>
