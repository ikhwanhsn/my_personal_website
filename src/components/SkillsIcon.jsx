const SkillsIcon = ({Icon, children, style, styleChild}) => {
    return ( 
        <div className="" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
            <Icon className={style}/>
            <p className={styleChild}>{children}</p>
        </div>
     );
}
 
export default SkillsIcon;