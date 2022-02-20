import React, { useState } from 'react';
import CountButton from './CountButton/CountButton';

const App = () => {
    return (
        <div>
            <CountButton incrementBy={3} buttonColor={"yellow"}/>
            <CountButton incrementBy={7} buttonColor={"pink"} />
        </div>
    )
}

export default App