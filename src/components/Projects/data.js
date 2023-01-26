import P1 from "../../assets/P1.png"
import P2 from "../../assets/P2.png"
import P3 from "../../assets/P3.png"

let projectList = [
    {
        "number":1,
        "title":"Elm-Formatter-Web",
        "cover":P1,
        "tags":["React.JS","Elm","Formatter","Node.JS"],
        "describe": "Elm-Formatter-Web is a web application allow you to format you Elm code by elm code style. The formatter is based on elm-format and the frontend is developed by React.JS.",
        "features": ["Dark Mode","Code Highlight"],
        "link":"https://github.com/duanxianpi/Elm-Formatter-Web"
    },
    {
        "number":2,
        "title":"QtLive2d",
        "cover":P2,
        "tags":["Qt","C++","Live2d","OpenGL"],
        "describe": "QtLive2d is a Qt-based Live2d widget. it was written with C++ and QOpenGLWidget and QOpenGLFunctions provided by Qt which means it can display Live2d model on any Qt Widget software easily.",
        "features": ["Cross-Platform","Less resource consumption"],
        "link":"https://github.com/duanxianpi/QtLive2d"
    },
    {
        "number":3,
        "title":"AI-Voice-Diary",
        "cover":P3,
        "tags":["Python","PySide6","ASR","Assembly AI"],
        "describe": "AI Voice Diary allows you to use a voice to keep a diary. With the help of AI it can also auto generate the transcript of dairy. It will also help us analyze our dairy and get keywords about what is happen on that day!",
        "features": ["WINNER of AssemblyAI Challenge on MacHacks"],
        "link":"https://devpost.com/software/ai-voice-diary"
    }
];

export default projectList;