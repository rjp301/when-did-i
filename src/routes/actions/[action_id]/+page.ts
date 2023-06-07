import { pb } from "$lib/pocketbase";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const action = pb.collection("actions").getOne(params.action_id);
  return { action };
};
