import Marquee from 'react-fast-marquee';

function Languages({containerClassName, textClassName}) {
    const icons = ["python-plain", "c-original", "react-original",
        "javascript-plain", "bash-plain", "java-plain", "cplusplus-plain",
        "linux-plain", "vim-plain", "apache-plain", "vscode-plain"
    ];

    return (
    <Marquee className={containerClassName}>
        {
        
        icons.map((icon)=>{
            return (
                <i className={`devicon-${icon} ${textClassName}`}></i>
            );
        }
        )
        
        }
    </Marquee>
    );
}

export default Languages;