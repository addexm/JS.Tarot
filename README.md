JS.Tarot Setup: 
- Install node and npm
- Run 'npm install'

To run locally:
- Run 'npm run build:dll'
- Run 'npm run start'

To build for deployment: 
- Run 'npm run build'
- Copy the directory 'build' to your server

To customize card descriptions and data: 
- Modify app/Deck.js
- Re-build and deploy

To add an image set: 
- Add a folder to app/img with the name of your set (i.e.: MyNewSet)
- Add images, name 0.png - 77.png for each card image. 
- Add an image called 'back.gif' for the card back
- Modify app/DecksList.js to include your deck as "name: 'Title'"
- If desired, modify the "defaultDeck" property to use your new deck name
- Re-build and deploy