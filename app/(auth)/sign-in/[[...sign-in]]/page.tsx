import { ClerkProvider, SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <ClerkProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SignIn />
      </div>
    </ClerkProvider>
  );
}
