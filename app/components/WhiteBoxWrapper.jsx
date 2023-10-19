export default function WhiteBoxWrapper({ children }) {
  return (
    <div
      style={{
        fontFamily: "system-ui",
        background: "white",
        padding: 24,
        maxWidth: 720,
        margin: "100px auto",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
