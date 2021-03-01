import React from 'react';
import * as Font from 'expo-font';

const FontLoader = () => {
    Font.loadAsync({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.otf'),
        'Raleway-Thin': require('../assets/fonts/Raleway-Thin.otf')
    }
    ).then(() => setLoaded(true))
    return (
        <div>

        </div>
    )
}

export default FontLoader
