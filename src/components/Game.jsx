import React from 'react'
import '../Game.scss'
import DesktopApp from './DesktopApp'
import {useState, useEffect} from 'react'

const Game = ({setScore}) => {

    // create list of random applications with their name and picture url
    const [apps, setApps] = useState([
        {
            id: 1,
            name: 'Chrome',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png'
            ,isBad: false
        },
        {
            id: 2,
            name: 'Spotify',
            picture: 'https://www.svgrepo.com/show/349511/spotify.svg'
        
            ,isBad: false},
        {
            id: 3,
            name: 'Microsoft Edge',
            picture: 'https://www.svgrepo.com/show/354067/microsoft-edge.svg'
            ,isBad: false
        },
        {
            id: 4,
            name: 'Microsoft Word',
            picture: 'https://www.svgrepo.com/show/303194/microsoft-word-2013-logo-logo.svg'
            ,isBad: false
        },
        {
            id: 5,
            name: 'Microsoft Excel',
            picture: 'https://www.svgrepo.com/show/303193/microsoft-excel-2013-logo.svg'
            ,isBad: false
        },
        {
            id: 6,
            name: 'Microsoft PowerPoint',
            picture: 'https://www.svgrepo.com/show/303283/microsoft-powerpoint-2013-logo.svg'
            ,isBad: false
        },
        {
            id: 7,
            name: 'Microsoft OneNote',
            picture: 'https://www.svgrepo.com/show/303556/microsoft-access-2013-logo.svg' // this aint the onenote logo
            ,isBad: true
        },
        {
            id: 8,
            name: 'Microsoft Outlook',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png'
            ,isBad: false
        },
        {
            id: 9,
            name: 'Microsoft Teams',
            picture: 'https://www.svgrepo.com/show/303180/microsoft-teams-logo.svg'
            ,isBad: false
        },
        {
            id: 10,
            name: 'Microsoft OneDrive',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Microsoft_OneDrive_logo.svg/1200px-Microsoft_OneDrive_logo.svg.png'
            ,isBad: false
        },
        {
            id: 11,
            name: 'Microsoft Azure',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Microsoft_Azure_logo.svg/1200px-Microsoft_Azure_logo.svg.png'
            ,isBad: false
        },
        {
            id: 12,
            name: "Club Penguin",
            picture: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Disney_Club_Penguin_Logo.svg",
            isBad: true
        },
        {
            id: 13,
            name: "Disney+",
            picture: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
            isBad: true
        },
        {
            id: 14,
            name: "Fortnite",
            picture: "https://upload.wikimedia.org/wikipedia/commons/0/0e/FortniteLogo.svg",
            isBad: true
        },
        {
            id: 15,
            name: "League of Legends",
            picture: "https://upload.wikimedia.org/wikipedia/commons/d/d8/League_of_Legends_2019_vector.svg",
            isBad: true
        },
        {
            id: 16,
            name: "Minecraft",
            picture: "https://upload.wikimedia.org/wikipedia/commons/3/32/Minecraft_logo.svg",
            isBad: true
        },

    ])

    // Not from stack overflow, i promise
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    // function that removes an app from the list of apps
    const removeApp = (id) => {
        setApps(apps.filter(app => app.id !== id))
    }

    const clickedBadApp = (app) => {
        setScore(score => score + 1)
        
        app.name = "GOOD!"
        setTimeout(() => {
            removeApp(app.id)
        }, 700);
    }

    const clickedGoodApp = (app) => {
        setScore(score => score - 1)
        
        app.name = "WRONG"
        setTimeout(() => {
            removeApp(app.id)
        }, 700);
    }

    const [hasShuffled, setHasShuffled] = useState(false)

    // shuffle the list of apps once after the component mounts
    useEffect(() => {
        if(!hasShuffled) {
            shuffle(apps)
            setHasShuffled(true)
        }
    } ,[])

    return (
    <div className="app-grid">
        {apps.map((app) => <div onClick={() => {
            if (app.isBad) {
                clickedBadApp(app)
            }else {
                clickedGoodApp(app)
            }
        }} className='application' key={app.id}>
            <img src={app.picture} alt={app.name} className="app-image"/>
            <h1 className="app-name">{app.name}</h1>
        </div>)}
        
    </div>
  )
}

export default Game
/*[<DesktopApp name="Chrome" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%282016%29.svg/1200px-Google_Chrome_icon_%282016%29.svg.png" />,
<DesktopApp name="Spotify" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Spotify_logo_2015.svg/1200px-Spotify_logo_2015.svg.png" />,
<DesktopApp name="Discord" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Discord_logo_2015.svg/1200px-Discord_logo_2015.svg.png" />,
<DesktopApp name="Steam" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Steam_icon_%282016%29.svg/1200px-Steam_icon_%282016%29.svg.png" />,
<DesktopApp name="Visual Studio Code" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Sublime Text" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Notepad++" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="GitHub" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="GitKraken" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Slack" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Skype" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Telegram" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="WhatsApp" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Microsoft Word" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Microsoft Excel" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Microsoft PowerPoint" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Microsoft OneNote" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Microsoft Outlook" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Microsoft Teams" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Microsoft OneDrive" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />,
<DesktopApp name="Microsoft Azure" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Visual_Studio_Code_1.8_icon.svg/1200px-Visual_Studio_Code_1.8_icon.svg.png" />] */