export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <p>Finde contacts by</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
}
