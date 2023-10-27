import Dashboard from "../components/dashboard";
import Login from "../components/login";
import QuestSidebar from "../components/questsidebar";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="left">
        <div className="logo">
          <Link href="/home">
            <img src="/image/prime-nine_mark.svg" width="70px" />
          </Link>
        </div>
        <div class="navbar">
          <Link href="/content">About</Link>
          <div class="dropdown">
            <button class="dropbtn">Game</button>
            <div class="dropdown-content">
              <Link href="/roadmap">Roadmap</Link>
              <Link href="/content2">Tokenomics</Link>
              <Link href="#">Team</Link>
              <Link href="#">Omnichain</Link>
            </div>
          </div>
          <Link href="/mint">Mint</Link>
          <Link href="/calculator">Calculator</Link>
        </div>
      </div>
      <div className="right">
        <Dashboard />
        <QuestSidebar />
      </div>
    </header>
  );
}
