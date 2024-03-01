import Avatar from "./Avatar";

export default function Profile({isNewbie, image, name, title}) {
  return (
    <div className='profile'>
      <Avatar
        image={image}
        alt={name}
        isNewbie={isNewbie}
      />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>

  );
}