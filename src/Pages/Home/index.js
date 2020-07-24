import React, {Component} from 'react';
import Carrousel from '../../Components/Carousel';
import Video from '../../Components/Video';
import './styles.css';


class Home extends Component {
    constructor(){
        super();
        this.state= {

        }
    }
    render(){
        return(
            <>
            <div className="div-header">
                <Video>
                </Video>
            </div>
            <div className="div-carrousel">
                <Carrousel>
                </Carrousel>
            </div>
            </>
        );
    }
}

export default Home;