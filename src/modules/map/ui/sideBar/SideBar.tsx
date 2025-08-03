import {
    selectCardOpen,
    setCardOpen,
    useMapDispatch,
    useMapSelector
} from "@modules/map/model";
import style from './side-bar.module.css'
import { MdClose } from "react-icons/md";
import { SideBarVehicle } from "../sideBarVehicle";
import  img from '@/shared/assets/images/car-front.webp?url'

export const SideBar = () => {
    const isCardOpen = useMapSelector(selectCardOpen)

    const dispatch = useMapDispatch()

    const closeSideBar = () => {
        dispatch(setCardOpen(false))
    }

    return (
        <div className={[
            !isCardOpen ? style.hide : style.unhide,
            style.sideBar,
            'flex flex-col w-full max-w-[20%] border-r-1 p-8'
            ].join(' ')}>
                <div className="flex flex-col h-full">
                    <MdClose className="self-end text-2xl" onClick={closeSideBar}/>
                    <img src={img} alt='car img'/>
                    <SideBarVehicle />
                </div>
        </div>
    );
};