import React, { useState } from 'react';
import { IonApp, IonInput, IonItem, IonPage } from '@ionic/react';
import './App.css'

import '@ionic/react/css/core.css';

const App: React.FC = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (val) => {
    console.log(' even.detail.value  ', val);
    const input = val.replace(/\D/g, "");
    console.log('input  ', input);
    setInput(input);
  }
  return (
    <IonApp>
      <IonPage>
        <IonItem>
          <IonInput
            inputmode="numeric"
            maxlength={3}
            value={input}
            placeholder="Enter Input"
            onIonChange={e => handleInputChange(e.detail.value)}>
          </IonInput>

        </IonItem>
      </IonPage>
    </IonApp>
  );
};


export default App;
