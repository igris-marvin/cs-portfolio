import { AppRouter } from "./routes/AppRouter"
import { Theme } from "@radix-ui/themes";
import "./assets/styles/style.css"
import "@radix-ui/themes/styles.css";

function App() {

  return (
    <>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <AppRouter />

        {/* <ThemePanel /> */}
      </Theme>
    </>
  )
}

export default App
