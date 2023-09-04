const MedsosIcon = ({Icon, hover, link}) => {
    return ( 
        <a href={link} target="_blank">
            <div className={`transition-all cursor-pointer border:ease-in-out border-2 rounded-full w-14 h-14 border-color-one dark:border-color-four ${hover}`}>
                <Icon className="scale-[2] m-auto mt-5"/>
            </div>
        </a>
     );
}
 
export default MedsosIcon;