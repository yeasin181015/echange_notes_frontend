// components/BackButton.tsx
"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="mb-10">
      ← Go Back
    </button>
  );
};

export default BackButton;
