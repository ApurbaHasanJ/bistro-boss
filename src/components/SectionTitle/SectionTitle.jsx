

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className="text-center">
            <p className="text-[#D99904] text-lg">{subTitle}</p>
            <h3 className="text-4xl mt-4 p-3  border-y-[3px] inline-block">{title}</h3>
            
        </div>
    );
};

export default SectionTitle;