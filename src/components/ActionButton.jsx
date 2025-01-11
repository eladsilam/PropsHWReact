export default function  ActionButton(props) {
    const {label,onAction} = props;

  return (
    <div>
      <p>Inside ActionButton</p>
      <button onClick={onAction}>{label}</button>
    </div>
  );
}