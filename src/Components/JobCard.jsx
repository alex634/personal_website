import { GoLinkExternal } from "react-icons/go";

import Card from './Card.jsx';
import Image from './Image.jsx';
import Text from './Text.jsx'; 

function JobCard({imgSrc, title, children, imgWidth, imgHeight, link}) {
return (
    <Card>
    <div className={'flex flex-row gap-3'}>
        <div> 
            <Image src={imgSrc} width={imgWidth} height={imgHeight}/>
        </div>
        <div className={'flex-1 relative'}>
            <Text variant={"header-card"}>{title}</Text>
            <GoLinkExternal 
            className="cursor-pointer"
            onClick={() => {window.open(link, '_blank');}}/>
            {children}
        </div>
    </div>
    </Card>
);
}

export default JobCard;