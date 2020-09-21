import React, { useEffect, useState } from 'react'; // useEffect is basically a function that happens when the code starts. It is similar to ComponenDidMount. It also has componentDidUpdate
import alanBtn from '@alan-ai/alan-sdk-web';



const alanKey = '8a536e685a0983b6e1ade461bd1084a22e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    const [newsArticles , setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            // api-key
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') { // this maps to p.play({ command: 'testCommand'}) in ALan Studio
                    //alert('This code was executed');

                    //console.log(articles);

                    setNewsArticles(articles); // now we have access to the newsArticles variable which we can now send to the components that they're going to display it
                }
            }
        })
    }, []);
    return (
        <div>
            <h1>Alan AI news Application</h1>
        </div>
    );
}

export default App;