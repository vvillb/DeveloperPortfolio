import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import AppTheme from "./AppLayout/AppTheme";

function App() {
  return (
    <BrowserRouter>
    <AppTheme>
      <AppRouter/>
    </AppTheme>      
    </BrowserRouter>
  )
}
export default App
