# Netflix GPT:
    Step 1: npx create-react-app
    Step 2: Install tailwind-css in npx create-react-app\
    Step 3: Create a github repository
    Step 4: Set up Your App
    Step 5: Providing Routing in App
    Step 6: Login Page
    Step 7: Sign Up Form
    Step 8: Form Validation 
    Step 9: useRef hook
    Step 10: firebase setup
    Step 11: Firebase deployment
    Step 12: Deploying our app to production
    Step 13: Creating first user / Sign up Account
    Step 14: Implemented Sign In account
    Step 15: Implemented Google Sign in
    Step 16: Setting up our Redux Store
    Step 17: Created our user Slice
    Step 18: Implemented sign Out feature 
    Step 19: Update Profile (adding displayName).
        -BugFix: sign up user displayName , update profile....
        -BugFix: navigating bug: Redirecting to browse page without authentication(on auth change)...
        -Some Best Practice:
            - onAuthStateChanged we need to unsubscribe to it also. So we will return a function which is returned by itself....
            -Use Constants to store the urls so it can be used multiple times...
    Step 20: Fetching movies from TMDB api.
    Step 21: Register on TMDB website and get api key and access token
    Step 22: Fetch movies list from api call using options 
    Step 23: Creating nowPlayingMoviesSlice 
    Step 24: Created custom hook to fetch data from tmdb api for movies list..
    Step 25: dispatching movie list to nowPlayingMovieReducer in redux-store..
    Step 26: Creating our Browsepage..
    Step 27: Created HeroSection , MovieSection 
    Step 28: Creating Video Title section...
    Step 29: Fetching Data for Trailer Video or Video Background 
    Step 30: Creating custom hook for fetching trailer Video
    Step 31: Embedded the Video using iframe..
    Step 32: Created Video Trailer inside movie slice
    Step 33: Created Movies Section..
    Step 34: Fetched data from now playing , top Rated movies , upcoming movies and popular movies
    Step 35: Created custom hooks for all sections
    Step 36: Created scroll list for each movie list
    Step 37: Buid movie Card component :
            -We created image cdn url from guides in tmdb
    Step 38: Completed the Netlix part Now will create Gpt search..
    Step 39: Created GPT Search Page
    Step 40: Created GPT Search Bar
    Step 41: Created MultiLanguage Sign Up Page 
    Step 42: Integrating GPT Api in our app
    Step 43: Integrated open ai api into our app 
    Step 44: Generated results from user query
    Step 45: Created Movie List with the help of results 
    Step 46: created gpt slice which holds the movieList , movie Names etc
    Step 47: Learned about Memoization to save api calls
    Step 48: created env file to secure our api keys (paid for firebase)
    Step 49: Making our app responsive
    Step 50: created our app to be responsive for all devices...
    


# Features: 
    -Login / Sign Up:
        - Sign In / Sign Up Form 
        - redirect to Browse Page
        - MultiLanguage Sign Up Page 

# (When LoggedIn):
    - Browse (after Authentication)
        -Header
        -HeroSection
            -Trailer
                -Movie Name
                -Description on Hover
                -Play Button
                -Suggestion Page
                    -MovieLists (Scrollable)
    - Netflix GPT 
        -Search Bar
        - Movie Suggestions

# 🎬 Netflix-GPT Movie Recommendation App 🎬

Are you tired of endlessly scrolling through Netflix, struggling to find the perfect movie? Look no further - NetflixGPT is here to revolutionize your viewing experience! 🍿

NetflixGPT is your go-to movie discovery companion, powered by cutting-edge technology and designed for a seamless user experience. With the magic of OpenAI GPT-3, it understands your movie preferences beyond traditional genre-based filters, making movie nights a breeze.


## 🚀 Tech Stack

Netflix-GPT is built using a modern tech stack that includes:

- **Frontend**:
  - ReactJS: A JavaScript library for building user interfaces.
  - Vite: A fast, modern build tool for web development.
  - Redux Toolkit: A library for efficient state management in React applications.

- **Styling**:
  - Tailwind CSS: A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
    
- **Authentication**:
  - Firebase Authentication: Firebase's authentication service for secure user management.

- **AI Integration**:
  - OpenAI API OpenAI API provides users access to new pre-trained AI models developed by OpenAI, such as DALL-E, Codex, and GPT-3.


- **Deployment**:
  - Vercel and Firebase Hosting.

## 🚀 Features 

- **AI-Powered Recommendations**: NetflixGPT uses OpenAI GPT-3 to analyze your viewing history and preferences, delivering personalized movie recommendations based on factors like year, cast, genre, and more!

- **Sleek Design & User-Friendly**: Crafted with React and Tailwind CSS, NetflixGPT offers a stunning, intuitive interface that simplifies your movie search.

- **Efficient State Management**: Thanks to Redux Toolkit, our app is optimized for performance, ensuring a smooth and responsive experience.

- **Secure and Privacy First**: Firebase provides top-notch user authentication, while Protected Routes ensure your data remains private and secure.

- **Huge Movie Database**: With integration to TMDB, NetflixGPT provides access to an extensive library of films from around the world.

- **Multi Language Support**: Personalize your experience with language support for Hindi, English, and Spanish.

- **Lightning-Fast Performance**: NetflixGPT is optimized with memoization, guaranteeing lightning-fast results.

- **Modular & Extensible**: Our architecture is designed for growth and adaptability, making it easy to add exciting new features in the future.

- **Responsive Everywhere**: Whether you're on your computer, tablet, or phone, NetflixGPT adapts to your device for a consistent experience.

- **Code Reusability**: We've set a strong foundation for future developments, promising even more exciting features to come!


## 🚀 Demo

You can see the live demo of the app [here](https://netflixgpt-aryan.web.app/.)
