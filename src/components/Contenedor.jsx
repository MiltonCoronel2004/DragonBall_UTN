export function Contenedor({ children, filtered }) {
  return <div className={`${filtered.length > 0 ? "grid grid-cols-4" : ""} gap-4`}>{children}</div>;
}
