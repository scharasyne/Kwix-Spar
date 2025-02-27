import OCRScanner from "../components/OCRScanner";

export default function Verify() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Upload PWD ID</h1>
      <OCRScanner />
    </div>
  );
}
