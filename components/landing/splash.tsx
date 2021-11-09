import React from 'react';
import {IonSpinner} from "@ionic/react";

const Splash: React.FC=()=> {
    return (
        <div className="h-screen flex items-center justify-center">
            <IonSpinner name="dots" />
        </div>
    );
};

export default Splash;
