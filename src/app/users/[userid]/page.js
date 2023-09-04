import Link from 'next/link';

async function getUser(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
}

const UserDetails = async ({ params }) => {
  const user = await getUser(params.userid);

  return (
    <div>
      <h2
        style={{ textAlign: 'center', marginBottom: '60px', fontSize: '60px' }}
      >
        User Details
        <span style={{ fontSize: '20px', marginLeft: '20px' }}>
          <Link href="/users">Go Back To Users</Link>
        </span>
      </h2>

      {user.map((item) => (
        <div
          key={item.id}
          style={{
            width: '300px',
            boxShadow: '0px 0px 20px 3px',
            margin: 'auto',
            padding: '20px',
          }}
        >
          <h3>UserId: {item.id}</h3>
          <h3>Name: {item.name}</h3>
          <h3>Email: {item.email}</h3>
          <h3>Age: {item.age}</h3>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
