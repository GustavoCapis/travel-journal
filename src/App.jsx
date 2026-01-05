import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data.js";

export default function App() {
  const journalData = data.map((data) => {
    return (
      <Entry
        key={data.id}
        data={data}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="container">{journalData}</main>
    </>
  );
}
