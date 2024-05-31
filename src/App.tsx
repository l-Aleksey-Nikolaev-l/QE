import Button from "./FOR_TEST/Button";
import Alert from "./FOR_TEST/Alert";

import ArtistCard from "./components/ArtistCard/ArtistCard";
import CUESheetButton from "./components/Buttons/CUE_Sheet_Button/CUE_Sheet_Button";
import SearchBar from "./components/SearchBar/Search_Bar";
import InformationLabel from "./components/InformationLabel/Information_Label";
import { useState } from "react";

function App() {

    // const [alertVisible, setAlertVisibility] = useState(false);
    return (
        <div>
            {/*<Button onClick={() => setAlertVisibility(true)}></Button>*/}
            {/*{alertVisible && <Alert onClose={() => setAlertVisibility(false)}></Alert>}*/}
            <SearchBar></SearchBar>
            <ArtistCard></ArtistCard>
        </div>
    );
}

export default App;