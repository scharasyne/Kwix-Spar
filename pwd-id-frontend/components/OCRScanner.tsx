import { useState } from "react";
import Tesseract from "tesseract.js";

export default function OCRScanner() {
  const [text, setText] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Tesseract.recognize(file, "eng")
      .then(({ data: { text } }) => setText(text))
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {text && <p className="mt-4 bg-white p-4">{text}</p>}
    </div>
  );
}
