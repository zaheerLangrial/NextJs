import DataTable from "@/components/DataTable";

 export default async function Home() {
  
  return (
    <div>
      <h1 className="flex justify-center text-5xl font-bold py-5 text-blue-500">Nextjs Task</h1>
      <DataTable />
    </div>
  );
}
