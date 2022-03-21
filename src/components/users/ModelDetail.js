import { Link } from "react-router-dom";

const ModelDetail = ({ info }) => {
  return (
    <div>
      <p>User's ID: {info.id}</p>
      <p>Name: {info.name}</p>
      <p>Username: {info.username}</p>
      <p>Email: {info.email}</p>
      <p>Phone: {info.phone}</p>

      <div>
        <Link to={`/users/${info.id}`}>
          <button>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default ModelDetail;
