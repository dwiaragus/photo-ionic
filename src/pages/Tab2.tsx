import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import { camera, trash, close,arrowBackOutline } from "ionicons/icons";
import React, { useState } from "react";
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";
// other imports

const Tab2: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  // snip - rest of code
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  onClick={() => setPhotoToDelete(photo)}
                  src={photo.webviewPath}
                />
                <IonActionSheet
                  isOpen={!!photoToDelete}
                  buttons={[
                    {
                      text: "Delete",
                      role: "destructive",
                      icon: trash,
                      handler: () => {
                        if (photoToDelete) {
                          deletePhoto(photoToDelete);
                          setPhotoToDelete(undefined);
                        }
                      },
                    },
                    {
                      text: "Cancel",
                      icon: close,
                      role: "cancel",
                    },
                  ]}
                  onDidDismiss={() => setPhotoToDelete(undefined)}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <div >
            <a  href="/">
              <IonIcon icon={arrowBackOutline} style={{width: '100px', fontSize: '40px'}}/>
            </a>
        </div>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
