import Header from "@/components/AdminHeader";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className=" text-5xl font-bold text-blue-800">
          Heloo World This is my first App
        </h1>
      </main>
    </div>
  );
}
