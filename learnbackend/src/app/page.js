import axios from 'axios'

export default async function Home() {
  const res = await axios.get('http://localhost:3000/api/products')
  const data = res.data
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello {data.fName}. How are u?</h1>
      <p>Your father name is <b>{data.fatherName}</b></p>
    </main>
  );
}
