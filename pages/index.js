import Head from 'next/head'
import ListData from '../components/listdata'
import Movie from '../components/DataTable'
import {useState, useEffect} from 'react'
import { getEvent } from '../services/EventServices'

import {URL, URLSearchParams} from 'url'

export async function getServerSideProps(){
  
  const res = await getEvent(1, 4)
  
  const data = await res.json()
  const perpage = Math.ceil(data.data.count/4)

  return{
    props:{
      dataEvent: {data: data, perpage: perpage}
    }
  }
}

export default function Home(dataEvent) {
  console.log(dataEvent)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Movie dataEvent={dataEvent.dataEvent.data.data.rows} count={dataEvent.dataEvent.data.data.count} perpage={dataEvent.dataEvent.perpage}/>
    </div>
  )
}
