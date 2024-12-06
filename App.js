import { PaperProvider } from "react-native-paper";
import AppNavigation from "./App/Routes/AppNavigation";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigation />
    </PaperProvider>
  );
}
