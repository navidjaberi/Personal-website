const ContactCard = ({ pathD, color, viewBox }) => {
  return (
    <div className="w-full text-white items-center justify-center rounded-xl p-4 md:mt-10   ease-in-out duration-500 mx-auto">
      <svg
        viewBox={viewBox}
        fill="currentColor"
        height="4em"
        width="4em"
        className={`mx-auto dark:opacity-50 dark:hover:opacity-100 cursor-pointer ${color}`}
      >
        <path d={pathD} />
      </svg>
    </div>
  );
};
export default ContactCard;
