import Header from "@/components/Header";
import LookUpForm from "@/components/LookUpForm";

export default function Home() {
  return (
    <>
      <Header title="Ordinal Inscription Lookup" />

      <main className="flex flex-col gap-4 p-4 page-wrapper">
        <LookUpForm />
      </main>
    </>
  );
}
