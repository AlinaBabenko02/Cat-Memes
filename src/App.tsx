import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import { AppMenu } from "./components/shared/AppBar/AppBar";
import { Home } from "./components/screens/Home/Home";
import { Memes } from "./components/screens/Memes/Memes";
import { AddMem } from "./components/screens/AddMem/AddMem";
import { store } from "./data/redux/store";
import { FavoriteMemes } from "./components/screens/Favorites/Favorites";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppMenu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/memes" element={<Memes />} />
          <Route path="/add-mem" element={<AddMem />} />
          <Route path="/favorites" element={<FavoriteMemes />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
