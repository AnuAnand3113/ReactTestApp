import { useSelector } from "react-redux";

export const Profile = () => {
  const userData = useSelector((state) => state.loginUser);
  const allUsers = useSelector((state) => state.signInUser);

  const loggedInUser = allUsers.find(
    (user) => user.username === userData.username
  );

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-5 border-0">
        {loggedInUser ? (
          <div className="text-center">
            <h2 className="mb-4">
              Welcome,{" "}
              <span className="text-success">{loggedInUser.fullName}</span>
            </h2>
          </div>
        ) : (
          <div className="text-center">Profile does not exist</div>
        )}
      </div>
    </div>
  );
};
