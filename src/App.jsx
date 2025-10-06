import liveIcon from "./assets/tiktok icons/tiktok-live.svg";
function App() {
  return (
    <div className="min-h-screen min-w-screen bg-black/40 p-4">
      <div>
        <div>
          <img src={liveIcon} alt="tiktok live icon" width={35} />
        </div>
        <ul>
          <li>STEM</li>
          <li>Explore</li>
          <li>Following</li>
          <li>For You</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
