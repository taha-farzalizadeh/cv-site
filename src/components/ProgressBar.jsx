import React, {useState , useEffect} from 'react'
import "./styles/Progress-bar.scss"

const ProgressBar = ({bgcolor,progress}) => {

    const [width , setWidth] = useState(0);

    useEffect(() => {
        setWidth(progress);
    },[progress]);

    const Child_div = {
        width: `${width}%`,
        backgroundColor: bgcolor,
    }


    return (
        <div className="container" >
            <div className="value" style={Child_div}>
            </div>
        </div>
    )
}

export default ProgressBar;
