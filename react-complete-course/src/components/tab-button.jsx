// {children} here is used so that other  HTML elements can be embedded
// inside this component
// e.g. <TabButton><h2>Button Title</h2></TabButton>
export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
