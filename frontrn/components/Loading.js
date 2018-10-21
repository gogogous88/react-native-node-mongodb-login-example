import React, {Component} from 'react';
import {Image} from 'react-native';
import {Spinner} from 'native-base';
import Style from '../Components/Style';

class Loading extends Component {
    render() {
        return (
            <Image source={require(('../Images/image-1.jpg'))} style={Style.bgImage}>
                <Spinner color='#fff' size={50}/>
            </Image>
        );
    }
}

export default Loading;