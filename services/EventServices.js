

async function getEvent(page, per_page){
    const url = new URL('http://localhost:3001/api/v1/events/admin')
    const params = {page: page || 1, per_page:per_page || 4}
    url.search = new URLSearchParams(params).toString();

    const res = await fetch(url,{
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozNCwiZW1haWwiOiJkZXZpbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQxNTUwOTY2LCJleHAiOjE2NDE1OTQxNjZ9.9DWHYEE_Qky4ZAQcjYBNbeyW3-qap0F7ExNhXIf0thM",
          refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozNCwiZW1haWwiOiJkZXZpbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQxNTUwOTY2LCJleHAiOjE2NDE2MzczNjZ9.46Zriw_pLI51aMvRNwIm8Je8XJJodYN_orLGKlat_VE"
        },
    
      })
    
    return res
} 

export {getEvent}