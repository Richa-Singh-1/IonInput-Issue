# ionic-scroll
import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useState } from "react";

const App = () => {
  const [moveToTop, setMoveToTop] = useState(true);
  const handleScroll = event => {
    const scrollTop = event.detail.scrollTop;
    if (scrollTop > 1 && moveToTop) {
      setMoveToTop(false);
    } else if (scrollTop < 50 && !moveToTop) {
      setMoveToTop(true);
    }
  };

  const doRefresh = event => {
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
  };

  return (
    <IonPage>
      <IonHeader className="ion-header-fixed">
        <IonToolbar className="ion-toolbar-one">
          <IonLabel>Fixed Header</IonLabel>
        </IonToolbar>
        {moveToTop && (
          <IonToolbar className="ion-toolbar-two">
            <IonLabel>
              <IonButton>Don't Click Me</IonButton>
            </IonLabel>
          </IonToolbar>
        )}
      </IonHeader>
      {moveToTop && <div className="hidden-header1" />}
      <IonContent
        className="ion-content-main"
        scrollEvents={true}
        onIonScroll={handleScroll}
      >
        {!moveToTop && <div className="hidden-header" />}
        {!moveToTop && (
          <IonToolbar className="ion-toolbar-two">
            <IonLabel>
              <IonButton>Don't Click Me</IonButton>
            </IonLabel>
          </IonToolbar>
        )}
        <div className="ion-content-container">
        </div>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent> </IonRefresherContent>
        </IonRefresher>
      </IonContent>
    </IonPage>
  );
};

export default App;


.ion-header-fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
}
.hidden-header {
  height: 50px;
}

.hidden-header1 {
  height: 104px;
}

.ion-toolbar-two {
  position: sticky;
  top: 0;
  z-index: 0;
}

.ion-content-container {
  height: 1200px;
  background-color: darkgoldenrod;
}

