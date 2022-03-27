import Loading from "../loading/Loading";
import Search from "../search/Search";

const Users = ({ users }) => {
  return (
    <div>
      {users ? (
        <Search placeholder="Search..." searchData={users} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Users;
