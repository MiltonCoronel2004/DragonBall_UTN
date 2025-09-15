export async function getAllCharacters() {
  const res = await fetch(import.meta.env.VITE_API);
  const data = await res.json();
  const characters = data.items;
  return characters ?? [];
}
