const MedsosIcon = ({Icon, hover}) => {
    return ( 
        <div className={`transition-all border:ease-in-out border-2 rounded-full w-14 h-14 border-color-one dark:border-color-four ${hover}`}>
            <Icon className="scale-[2] m-auto mt-5"/>
        </div>
     );
}
 
export default MedsosIcon;