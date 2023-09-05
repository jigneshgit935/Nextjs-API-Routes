import DeleteUser from '@/util/DeleteUser';
import Link from 'next/link';

async function getUsers() {
  let data = await fetch('http://localhost:3000/api/users');
  data = await data.json();
  return data.data;
}

export default async function User() {
  const users = await getUsers();

  return (
    <div>
      <h3>Users</h3>
      {users.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div
              style={{
                width: '240px',
                padding: '10px 0px',
              }}
            >
              <Link href={`/users/${item.id}`}>Go to {item.name} details</Link>
            </div>
            <div
              style={{
                width: '40px',
                padding: '10px 0px',
              }}
            >
              <Link href={`/users/${item.id}/update`}>Edit</Link>
            </div>
            <div
              style={{
                width: '40px',
                padding: '10px 0px',
              }}
            >
              <DeleteUser id={item.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
