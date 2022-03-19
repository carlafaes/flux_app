import React,{Component} from 'react'
import './styles/Caja.modules.css'
import ColorAppStore from '../colorAppStore'

class Caja extends Component {
    constructor(props){
        super(props);

        this.state={
            color:ColorAppStore.getActiveColor(),
        }
    }

    componentDidMount(){
        ColorAppStore.on('storeUpdated', this.updateColor);
    }

    componentWillUnmount(){
        ColorAppStore.removeListener('storeUpdated', this.updateColor);
    }

    updateColor=()=>{
        this.setState({
            color:ColorAppStore.getActiveColor(),
        })
    }
    render(){
        return (
            <div>
                <div className='color_container' style={{backgroundColor:this.state.color}}>Caja</div>
            </div>
          )
    }
  
}

export default Caja