import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home | Michael Moen";
  }, []);
  return (
    <>
      <img
        id="jonah"
        src="/jonah_window.jpg"
        alt="Stained glass window of Jonah and the Whale"
      />
      <p className="caption">
        <i>
          This roundel is a reconstruction of a window at the Canterbury
          Cathedral depicting Jonah being swallowed by the whale. I completed
          this as part of the Guild of Saint Columbkille at Saint Louis Priory
          School.
        </i>
      </p>
    </>
  );
}
export default Home;
