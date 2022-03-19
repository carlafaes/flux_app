import dispatcher from '../dispatcher';
import * as colorAppActions from '../actions/coloractions';
import {EventEmitter} from 'events';


const colorStore = new colorStore();
dispatcher.register(colorStore.handleActions.bind(colorStore));

class ColorAppStore extends EventEmitter{
    constructor(){
        super();
        this.activeColor = '#ff0000';
    }

    handleActions(action){
        switch(action.type){
            case ColorAppStore.COLOR_APP_ACTIONS.CHANGE_COLOR:{
                this.activeColor = action.value;
                this.emit('storeUpdated')
                break;
            }
            default:{

            }
        }
    }
    getActiveColor(){
        return this.activeColor;
    }
}


export default ColorAppStore;