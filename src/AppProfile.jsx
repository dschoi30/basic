import "./App.css";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e)
  }
  return (
    <>
      <button onClick={handleClick}>Save</button>
      <Profile
        isNewbie={true}
        image='https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        name='Andrew Choi'
        title='Software Engineer'
      />
      <Profile
        image='https://images.unsplash.com/photo-1708555298096-5b3f26f0e1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        name='Andrew You'
        title='Software Engineer'
      />
      <Profile
        image='https://images.unsplash.com/photo-1708443683276-8a3eb30faef2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        name='Andrew Joo'
        title='Software Engineer'
      />
    </>
  );
}

export default AppProfile;