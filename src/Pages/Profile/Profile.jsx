import UseAuth from "../../hooks/UseAuth";

const Profile = () => {
    const {user} = UseAuth()
  return (
    <div>

      <img className="w-36 rounded-xl mx-auto" src={user?.photoURL} alt="" />
      <h2 className="text-2xl font-bold">{user?.displayName}</h2>
    </div>
  );
};

export default Profile;