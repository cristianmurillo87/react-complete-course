export default function CoreConcept({
  title,
  description = "No description",
  img
}) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
