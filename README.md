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
    


# Features: 
    -Login / Sign Up:
        - Sign In / Sign Up Form 
        - redirect to Browse Page
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

