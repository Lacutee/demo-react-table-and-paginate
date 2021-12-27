import Head from 'next/head'
import ListData from '../components/listdata'
import Movie from '../components/DataTable'
import {useState, useEffect} from 'react'
import { getEvent } from '../services/EventServices'

import {URL, URLSearchParams} from 'url'

export async function getServerSideProps(){
  
  const res = await getEvent(1, 4)

  const data = await res.json()
  return{
    props:{
      dataEvent: data
    }
  }
}

export default function Home(dataEvent) {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Movie dataEvent={dataEvent.dataEvent.data.rows} count={dataEvent.dataEvent.data.count}/>
    </div>
  )
}
