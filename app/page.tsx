import SigninButton from "@/components/SigninButton";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <SigninButton/>
      </div>
    </main>
  );
}
