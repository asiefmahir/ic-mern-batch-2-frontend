import { revalidateTag } from "next/cache";

export async function GET(request) {
	console.log("I am running");
	revalidateTag("products");
	return Response.json({ msg: "Revalidation Successful" });
}
