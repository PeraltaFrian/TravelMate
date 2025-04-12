## Travel Mate (Translator & Weather App) 

Web link: https://travelmate-kappa.vercel.app

Travel Mate is a responsive and user-friendly web application that combines real-time language translation with live weather updates. Designed for travelers, it helps users communicate across language barriers and stay informed about weather conditions in popular cities worldwide. Whether planning a trip or already abroad, Travel Mate aims to make travel more convenient, accessible, and stress-free.

## Why I Chose This Emerging Trend and Its Benefits
For my emerging technology assignment, I chose to focus on translation service and text-to-speech function. Language barriers are one of the biggest challenges when traveling, and real-time translations can significantly ease communication. Adding text-to-speech not only improves accessibility but also supports language learning. This combination enhances the user experience with pronunciation guidance. Additionally, integrating the OpenWeather API provides live weather forecasts, helping users plan their travels more effectively.

## How the Technology Was Integrated and Its Impact on User Experience
The app uses the MyMemory Translation API for real-time translations, with dropdown menus for selecting languages and built-in input validation and error handling. The Web Speech API enables speech synthesis, allowing users to hear both original and translated text. Weather updates are powered by the OpenWeather API, offering city suggestions, smooth transitions, and essential weather data. Designed with a responsive layout, the app works seamlessly across devices. Features like pronounciation and city filtering improve accessibility and usability, while animations using framer-motion create an engaging, dynamic interface.

## My Experience Creating the Web App
Creating this web application was an enjoyable and rewarding experience, especially since I love traveling and have many friends who travel frequently. Initially, my focus was on translating words into different languages, but during testing, I realized I had difficulty pronouncing some of the translated text. This led me to add pronunciation support, which made the app more accessible and user-friendly. I also included a weather feature because I often check forecasts when traveling and felt it would add practical value. The APIs I used MyMemory for translation and OpenWeather for weather data were straightforward to integrate, making the development process smoother. I particularly enjoyed adding animations using Framer Motion, as they made the interface feel more dynamic and enhanced the overall user experience. Additionally, I cleaned up and modularized the code to keep it organized and reusable, which helped improve development efficiency and maintainability. Overall, the project allowed me to combine my interests with useful functionality to create a helpful tool for travelers.


## How to Run the App Locally:
1. Clone the repository: 
    git clone https://github.com/PeraltaFrian/TravelMate.git
2. Install dependencies
    npm install
3. Create a .env file in the root directory and add the API keys
    REACT_APP_MYMEMORY_API_KEY= <mymemory_api_key>
    REACT_APP_OPENWEATHER_API_KEY=<openweather_api_key>
3. Start the development server:
    npm start
4. Open http://localhost:3000 to view the Travel Mate.

## Folder Structure: 
/TravelMate
    /src
        /components
            ClearButton.jsx
            ErrorDisplay.jsx
            Footer.jsx
            Header.jsx
            Home.jsx
            LanguageSelector.jsx
            SpeechButton.jsx
            Translator.jsx
            TranslatorInput.jsx
            TranslatorOutput.jsx
            Weather.jsx
        /styles
            Footer.css
            Header.css
            Home.css
            Translator.css
            Weather.css
        App.css
        App.js
        index.css
        index.js
    public
        luggage.jpg

## Functionality:
1. Real-Time Translation - Translate text instantly by selecting source and target languages.
2. Pronounce the words - Listen to both original and translated text.
3. Weather Forecasting- Get live weather updates by searching for a city.

## Testing Instructions
1. Test the translator by entering text in one language and switching to various target languages. Check for translation output.
2. Try the pronounciation feature by clicking the pronounce buttons below the text boxes.
3. Use the weather feature by typing different city names or selecting from the suggestion list. Confirm that relevant weather data loads properly.
4. Test responsiveness by resizing your browser window or opening the app on different devices (desktop, tablet, mobile).
5. Check accessibility by using keyboard navigation and screen reader tools.