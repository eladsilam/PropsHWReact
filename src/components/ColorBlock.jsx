export default function ColorBlock(props) {
  const {color} = props;
  

  if(color)
  {
    return(
    <div style={{ width: "50px", height: "50px", backgroundColor: color }}>
      This is a {color} square div
    </div>
    )
  }
  else
  {
    return (
      <div
        style={{ width: "50px", height: "50px", backgroundColor:"gray" }}
      >
        This is a default color square div
      </div>
    );
  }

}
