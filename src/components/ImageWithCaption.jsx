export default function ImageWithCaption(props) {
  const { src, caption } = props;
  if(src)
  {
    return(
      <div>
        <img src={src} alt="Cat Image"/>
        <p>{caption}</p>
      </div>
    )
  }
  else
  {
    return(
      <p>Image not available...</p>
    )
  }




  



}
