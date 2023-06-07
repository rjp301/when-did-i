import { pb } from "$lib/pocketbase";
import type { PageLoad } from "./$types";

export const ssr = false

export const load: PageLoad = ({ params }) => {
  return {
    action: pb.collection("actions").getOne(params.action_id),
    events: pb
      .collection("events")
      .getFullList({ filter: `action_id = '${params.action_id}'`, sort: "-time" }),
  };
};
