import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import { AppMenu } from "./components/AppBar/AppBar";
import { Home } from "./screens/Home/Home";
import { Memes } from "./screens/Memes/Memes";
import { AddMem } from "./screens/AddMem/AddMem";
import { store } from "./data/redux/store";
import { FavoriteMemes } from "./screens/Favorites/Favorites";

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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
