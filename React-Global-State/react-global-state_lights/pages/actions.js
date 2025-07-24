import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleToggleAllLightsOn,
  handleToggleAllLightsOff,
  lights,
  lightsOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleToggleAllLightsOn={handleToggleAllLightsOn}
        handleToggleAllLightsOff={handleToggleAllLightsOff}
        lights={lights}
        lightsOn={lightsOn}
      />
    </>
  );
}
