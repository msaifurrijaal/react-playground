import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const userName = useLogin();
  return (
    <div>
      <h1>Profile</h1>
      Username : {userName}
    </div>
  );
};

export default ProfilePage;
