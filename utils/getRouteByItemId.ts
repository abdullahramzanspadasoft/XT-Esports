import navRoutes from "@/constant/navbar/routes.json";

export function getRouteByItemId(id: number): string {
  const route = (navRoutes as Record<string, string>)[String(id)];
  return route ?? "/";
}
