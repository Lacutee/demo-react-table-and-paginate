

async function getEvent(page, per_page){
    const url = new URL('http://localhost:3001/api/v1/events/admin')
    const params = {page: page || 1, per_page:per_page || 4}
    url.search = new URLSearchParams(params).toString();

    const res = await fetch(url,{
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0MCwiZW1haWwiOiJicnVub0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNTc5NDIyLCJleHAiOjE2NDA2MjI2MjJ9.H0nbdd8f7UYGdqx8JsciEPEEmY9r9-SC1w155TE93MY",
          refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0MCwiZW1haWwiOiJicnVub0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNTc5NDIyLCJleHAiOjE2NDA2NjU4MjJ9.NykQ5icoMPOQ4lsi_Fk-ugLHcm9bEbYyv196bBCF51o"
        },
    
      })
    
    return res
} 

export {getEvent}