export const Available = ({ available }: { available: boolean }) => {
  return (
    <p
      className={`flex items-center gap-2 font-semibold 
       select-none ${
        available ? "text-secondary-400" : "text-red-500"
      }`}
    >
      <span
        className={`inline-block w-2 h-2 rounded-full ${
          available ? "bg-secondary-400" : "bg-red-500"
        }`}
      />
      {available ? "Available" : "Not available"}{" "}
    </p>
  );
};
