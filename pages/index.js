import Head from 'next/head'
import ListData from '../components/listdata'
import Movie from '../components/DataTable'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <ListData/> */}
      <Movie/>
    </div>
  )
}
