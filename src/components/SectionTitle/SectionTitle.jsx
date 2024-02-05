const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="text-center">
      <p className="text-[#D99904] md:text-lg text-xs">{subTitle}</p>
      <h3 className="md:text-4xl text-xl md:mt-4 mt-2 md:p-3 p-2  border-y-[3px] inline-block">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
