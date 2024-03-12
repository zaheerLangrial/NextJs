'use client'
import { UserType } from "@/contants/contants"
import { fetchData } from "@/utils/api"
import { Button, Table } from "antd"

async function DataTable() {
    const data = await fetchData()
      
  return (
    <Table columns={[
        {
            dataIndex : 'id',
            title : 'ID',
            width: '10%',
            key: 'id'
        },
        {
            dataIndex : 'name',
            title : 'Name',
            width : '30%',
            key : 'name'
        },
        {
            dataIndex : 'email',
            title : 'Email',
            width : '40%',
            key : 'email'
        }

    ]} dataSource={data.map((user : UserType , index : number) => ({...user , key: index}))} />
  )
}

export default DataTable


// server side me hm hooks Q ni use kar skty  // Is liyee k hamy hooks ui update karne k liyee use huti hain to ham server side jis ki koi ui ni waha kese use karagy gy sir .
//or agr use karne hu to kese karay gy   // Ni sir Ni use hu sktaa aghar hmne hooks wagaira use karni ha to client parna huga component.
// server or client me defference , bara difference ,   // Bara difference yehi ha k hm is me hooks ni use kar skty is k ilawa 
// server side km kese karta or yeh kese fast ha // fetch data backend sorce ko directly access kar skty hain , 
// app or pages router me major difference
// nextjs ki services 
// Services hain is ki Builtin Optimization , dynamic html striming data fetching css suport , client and server rendering , route handler , server actions , 