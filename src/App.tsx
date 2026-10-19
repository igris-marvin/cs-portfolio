import { AppRouter } from "./routes/AppRouter"
import { DataProvider } from "./context/DataContext";
import { Theme } from "@radix-ui/themes";
import "./assets/styles/style.css"
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <DataProvider>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <AppRouter />
      </Theme>
    </DataProvider>
  )
}

export default App
