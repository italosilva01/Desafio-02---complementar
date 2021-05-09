interface HeaderProps {
  name: string;
}
export function Header({ name }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {name}</span>
      </span>
    </header>
  );
}
