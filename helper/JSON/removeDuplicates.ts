import { InputData } from "@/types/Items";

export function removeDuplicatesFromItems(data: InputData): InputData {
    console.log("Starting to dedup: " + JSON.stringify(data))

    const seen: Set<string> = new Set();
    const uniqueItems: any[] = data.items.filter((item) => {
        const name = item.name;
        if (!seen.has(name)) {
            seen.add(name);
            return true;
        }
        return false;
    });
    console.log("dedupped results: " + JSON.stringify({ items: uniqueItems }))
    return { items: uniqueItems };
} 