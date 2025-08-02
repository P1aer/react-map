import {selectCardOpen, selectVeh, setCardOpen, useMapDispatch, useMapSelector} from "@modules/map/model";
import style from './side-bar.module.css'
import { useMockSelector } from "@/entities/mock";
import { selectAll, selectVehById, useMockActions, type VechicleData,  } from "@/entities/mock/model";
import { MdClose } from "react-icons/md";
import { VehicleList } from "../vehicleList";
import { ErrorButtonWrapper } from "../mapButton";
import {BaseButton} from "@shared/ui/Button";


export const SideBar = () => {
    const isCardOpen = useMapSelector(selectCardOpen)
    const currentVehId = useMapSelector(selectVeh)
    const currentVeh = useMockSelector((state) => selectVehById(state,currentVehId))
    const { loading } = useMockSelector(selectAll)
    

    const dispatch = useMapDispatch()
    const { postMock } = useMockActions()
    

    const closeSideBar = () => {
        dispatch(setCardOpen(false))
    }
    const toggleLock = () => {
        if (!currentVeh || loading) return;
        const veh: VechicleData = {
            ...currentVeh,
            isLocked: !currentVeh?.isLocked
        }
        console.log(`car ${veh.name} is ${veh.isLocked ? 'locked' : 'unlocked'}!`)
        postMock(veh)
    }
    return (
        <div className={[
            !isCardOpen ? style.hide : style.unhide,
            style.sideBar,
            'flex flex-col w-full max-w-[20%] border-r-1 h-[100vh] p-8'
            ].join(' ')}>
                <div className="flex flex-col h-full">
                    <MdClose className="self-end text-2xl" onClick={closeSideBar}/>
                    {/* <BaseTable<SideBarTableElement, SideBarTableElementKeys>
                        head={SIDEBAR_TABLE_HEAD}
                        tableData={currentVeh ? [currentVeh]: []}
                    /> */}
                    <div className="flex flex-col h-full justify-center">
                        <VehicleList data={currentVeh} />
                        <ErrorButtonWrapper>
                            <BaseButton disabled={loading} onClick={toggleLock}>
                                {currentVeh?.isLocked ? 'Unlock': 'Lock'} Vechicle
                            </BaseButton>
                        </ErrorButtonWrapper>
                        <ErrorButtonWrapper>
                            <BaseButton disabled={loading}>
                                Center on map
                            </BaseButton>
                        </ErrorButtonWrapper>
                    </div>

                </div>
        </div>
    );
};