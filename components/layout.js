export default function Layout({ children }) {
  return (
    <>
      <div className="lines-top-left"></div>
      <div className="lines-top-right"></div>
      <main>{children}</main>
      <div className="lines-bottom-left"></div>
      <div className="lines-bottom-right"></div>
      <div className="border-bottom-left"></div>
      <div className="border-bottom-right"></div>
    </>
  );
}
