import { Banks } from "@/containers/banks";
import { useGlobalContext } from "@/context/global/useGlobalContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { MainLayout } from "@/layouts/MainLayout";

function BanksPage() {
  const { banks } = useGlobalContext();
  const [storedBanks, setStoredBanks] = useLocalStorage("banks", []);

  if (banks.length > 0 && storedBanks.length === 0) {
    setStoredBanks(banks);
    localStorage.setItem("banks_time", new Date().toISOString());
  }

  // TODO: create bank card component
  // TODO: add more test, style and refactor (types, code, etc)

  return (
    <MainLayout title="Banks" pageDescription="The best banks in Mexico">
      <Banks banks={banks} />
    </MainLayout>
  );
}

export default BanksPage;
