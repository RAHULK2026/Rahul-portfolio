import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>

      <ul style={styles.ul}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  ul: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
};
