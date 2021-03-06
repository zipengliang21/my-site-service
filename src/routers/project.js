const express = require('express')
const router = new express.Router()
var config = require('config');

/**
 * Requires project id
 * Return the project info
 */
router.get('/projects/:id', async (req, res) => {
   // res.setHeader('Access-Control-Allow-Origin', config.get('setHeader.ui'));
   console.log(req.params.id)
   switch (parseInt(req.params.id)) {
      case 1:
         res.json(
             {
                title: "Morney",
                brief: "A simple web app for recording your expense and income",
                descriptions: [
                   "- This is a simple Tally Book Web Application based on React / React Router / Custom Hooks / webpack / TypeScript / LocalStorage",
                   "- The feature is fast and easy",
                   "- Working in this project helps me have a deeper understanding of webpack, Hooks API, and SVG Icon"
                ],
                preview: "https://liangzipeng.com/Morney-Website/",
                sourceCode: "https://github.com/zipengliang21/Morney",
                id: 1,
             },
         )
         break;
      case 2:
         res.json(
             {
                title: "My-Site",
                brief: "About this website, and what makes it awesome",
                descriptions: [
                   "- Built a personal website to introduce myself and showcase my projects",
                   "Highlights:",
                   "- Sketch for UI prototyping",
                   "- React.js for functional-based, declarative UI development",
                   "- TypeScript for enhancing code readability and catching bugs early at compile time",
                   "- styled-components for modular, scoped and dynamic CSS styling",
                   "- Support PC and Mobile compatibility",
                   "- And so much more..."
                ],
                preview: "https://liangzipeng.com/",
                sourceCode: "https://github.com/zipengliang21/my-site",
                id: 2,
             },
         )
         break;
      case 3:
         res.json(
             {
                title: "Rate My Restaurant",
                brief: "End-to-end admin system for UBC students to rate restaurants",
                descriptions: [
                   "- Developed a restaurant rating system with Java and Oracle Database that both customers and administrators could use",
                   "- Administrators could update customers’ information; Customers could make comments to the restaurants",
                   "- Used JDBC as a bridge to connect Java and our oracle database, implemented SQL statements to retrieve information of restaurants and customers from Oracle database, make modifications, or stored them into Oracle database",
                   "- Created GUI using Java Swing to display restaurant information and help customers use filter to search restaurants",
                   "",
                   ""
                ],
                preview: "",
                sourceCode: "https://github.com/zipengliang21/Rate-My-Restaurant",
                id: 3
             },
         )
         break;
      case 4:
         res.json(
             {
                "title": "Gomoku (Board Game)",
                "brief": "A board game for 2 players",
                "descriptions": [
                   "- Developed multiplayer board game in Java that can run multiple games simultaneously",
                   "- Implementing runnable interface and connected players with the game server by using Socket Java class",
                   "- Created GUI using Java Swing to record the state of the game including winner and steps taken by the users ",
                   "",
                   ""
                ],
                "preview": "",
                "sourceCode": "https://github.com/zipengliang21/Gomoku",
                "id": 4
             },
         )
   }
})

/**
 * Return the all projects info
 */
router.get('/projects', async (req, res) => {
   // res.setHeader('Access-Control-Allow-Origin', config.get('setHeader.ui'));git r
         res.json(
            [
                {
               title: "Morney",
               brief: "A simple web app for recording your expense and income",
               descriptions: [
                  "- This is a simple Tally Book Web Application based on React / React Router / Custom Hooks / webpack / TypeScript / LocalStorage",
                  "- The feature is fast and easy",
                  "- Working in this project helps me have a deeper understanding of webpack, Hooks API, and SVG Icon"
               ],
               preview: "https://liangzipeng.com/Morney-Website/",
               sourceCode: "https://github.com/zipengliang21/Morney",
               id: 1,
            },
               {
                  title: "My-Site",
                  brief: "About this personal website, and what makes it awesome",
                  descriptions: [
                     "- Built a personal website to introduce myself and showcase my projects",
                     "Highlights:",
                     "- Sketch for UI prototyping",
                     "- React.js for functional-based, declarative UI development",
                     "- TypeScript for enhancing code readability and catching bugs early at compile time",
                     "- styled-components for modular, scoped and dynamic CSS styling",
                     "- Support PC and Mobile compatibility",
                     "- And so much more..."
                  ],
                  preview: "https://liangzipeng.com/",
                  sourceCode: "https://github.com/zipengliang21/my-site",
                  id: 2,
               },
               {
                  title: "Rate My Restaurant",
                  brief: "End-to-end admin system for UBC students to rate restaurants",
                  descriptions: [
                     "- Developed a restaurant rating system with Java and Oracle Database that both customers and administrators could use",
                     "- Administrators could update customers’ information; Customers could make comments to the restaurants",
                     "- Used JDBC as a bridge to connect Java and our oracle database, implemented SQL statements to retrieve information of restaurants and customers from Oracle database, make modifications, or stored them into Oracle database",
                     "- Created GUI using Java Swing to display restaurant information and help customers use filter to search restaurants",
                     "",
                     ""
                  ],
                  preview: "",
                  sourceCode: "https://github.com/zipengliang21/Rate-My-Restaurant",
                  id: 3
               },
               {
                  "title": "Gomoku (Board Game)",
                  "brief": "A board game for 2 players",
                  "descriptions": [
                     "- Developed multiplayer board game in Java that can run multiple games simultaneously",
                     "- Implementing runnable interface and connected players with the game server by using Socket Java class",
                     "- Created GUI using Java Swing to record the state of the game including winner and steps taken by the users ",
                     "",
                     ""
                  ],
                  "preview": "",
                  "sourceCode": "https://github.com/zipengliang21/Gomoku",
                  "id": 4
               }
               ]
         )
})

module.exports = router
