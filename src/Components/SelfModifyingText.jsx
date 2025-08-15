import { useTypewriter } from "react-simple-typewriter";

function SelfModifyingText({className, words}) {
    const [text] = useTypewriter({
        words: words,
        loop: 0
    });
    

    return (<div className={`${className}`}>
    {text}
    </div>
    ); 
}

export default SelfModifyingText;