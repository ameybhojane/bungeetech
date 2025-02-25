# Introduction

This is web abb which allows you to search movies and view its details like year of release, box office collection etc.
It also allows you to filter movies on the basis of year

# Tech Stack Used

React JS, Tailwind, Antd 


# How to run application

The project is hosted at this link [https://bungeetech.vercel.app/](https://bungeetech.vercel.app/).

## OR

You can run the application locally using following steps
- Clone the github repo locally
- Create .env file at root level of the project and add variable "VITE_OMDB_API_KEY " with value of OMDB api key
        VITE_OMDB_API_KEY=`${Your api key}`
- Run the following command at root level
    - npm i
    - npm run dev


# How to get API key
- Go to [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
- In Genrate API section ,enter your email and submit
- You will receive API key to you e-mail
- Paste that API key in you .env file.