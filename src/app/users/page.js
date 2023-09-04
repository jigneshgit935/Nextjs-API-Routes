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
          <Link href={`/users/${item.id}`}>Go to {item.name} details</Link>
        </div>
      ))}
    </div>
  );
}
