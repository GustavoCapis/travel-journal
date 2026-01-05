import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data.js";

export default function App() {
  const journalData = data.map((data) => {
    return (
      <Entry
        id={data.id}
        img={data.img}
        title={data.title}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        dates={data.dates}
        text={data.text}
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
