const SkillsIcon = ({Icon, children, style, styleChild}) => {
    return ( 
        <div className="">
            <Icon className={style}/>
            <p className={styleChild}>{children}</p>
        </div>
     );
}
 
export default SkillsIcon;