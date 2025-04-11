import { db, auth } from "@/fierbase/admin"

export async function getInterviewById(id: string): Promise<Interview | null> {
    const interview = await db.collection("interviews").doc(id).get();
  
    return interview.data() as Interview | null;
  }