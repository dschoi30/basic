export default function Avatar({isNewbie, image, alt}) {
  return (
    <div className="avatar">
      <img className='photo'
        src={image} alt={alt} />
      {isNewbie && <span className='newbie'>New</span>}
    </div>
  );
}