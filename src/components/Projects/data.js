import P1 from "../../assets/P1.png"
import P2 from "../../assets/P2.png"
import P3 from "../../assets/P3.png"
import Ins from "../../assets/Ins2.png"

let projectList = [
    {
        "title":"InstaCal",
        "cover":Ins,
        "tags":["React.JS","Yolov5","Flask","GCP"],
        "describe": "InstaCal is a web-based application that provides food and nutritional information to users. It features an intuitive user interface built with React, which guides users through the process of submitting a photo and receiving nutritional information.",
        "features": [
            {
                "detail": "Yolov5",
                "highlight": false
            },
            {
                "detail": "Intuitive UI",
                "highlight": false
            },
            {
                "detail": "Project on DeltaHack IX",
                "highlight": false
            }
        ],
        "link":"https://devpost.com/software/instacal-eohuy0"
    },
    {
        "title":"Elm-Formatter-Web",
        "cover":P1,
        "tags":["React.JS","Elm","Formatter","Node.JS"],
        "describe": "Elm-Formatter-Web is a web application allow you to format you Elm code by elm code style. The formatter is based on elm-format and the frontend is developed by React.JS.",
        "features": [
            {
                "detail": "Dark Mode",
                "highlight": false
            },
            {
                "detail": "Code Highlight",
                "highlight": false
            }
        ],
        "link":"https://github.com/duanxianpi/Elm-Formatter-Web"
    },
    {
        "title":"QtLive2d",
        "cover":P2,
        "tags":["Qt","C++","Live2d","OpenGL"],
        "describe": "QtLive2d is a Qt-based Live2d widget. it was written with C++ and QOpenGLWidget and QOpenGLFunctions provided by Qt which means it can display Live2d model on any Qt Widget software easily.",
        "features": [
            {
                "detail": "Cross-Platform",
                "highlight": false
            },
            {
                "detail": "Less resource consumption",
                "highlight": false
            }
        ],
        "link":"https://github.com/duanxianpi/QtLive2d"
    },
    {
        "title":"AI-Voice-Diary",
        "cover":P3,
        "tags":["Python","PySide6","ASR","Assembly AI"],
        "describe": "AI Voice Diary allows you to use a voice to keep a diary. With the help of AI it can also auto generate the transcript of dairy. It will also help us analyze our dairy and get keywords about what is happen on that day!",
        "features": [
            {
                "detail": "WINNER of AssemblyAI Challenge on MacHacks",
                "highlight": true
            }
        ],
        "link":"https://devpost.com/software/ai-voice-diary"
    }
];

export default projectList;