import axios from 'axios'

export default async function Home() {

  // const res = await axios.get('http://localhost:3000/api/products')
  // const data = res.data

  const postRes = await axios.post('http://localhost:3000/api/products' , {'name' : 'Zaheer Ahmad'})
  console.log("PostRes",postRes)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Zaheer. How are u?</h1>
      <p>Your father name is <b>Imtiaz Ali</b></p>
    </main>
  );
}
