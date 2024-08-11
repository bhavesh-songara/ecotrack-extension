export const PoweredByGemini = (props: { className?: string }) => {
  return (
    <div className="flex items-center">
      <a
        href="https://gemini.google.com"
        target="_blank"
        rel="noreferrer"
        className={`text-sm hover:underline text-gray-600 ${
          props.className || ""
        }`}
      >
        Powered by Gemini
      </a>
    </div>
  );
};
